import {
    practicesQueries, locationQueries, locationPaymentAddressQueries, practiceStatementAddressQueries,
    practiceStatementMessagesQueries, practiceStatementOptionsQueries
} from './queries';
import { PG_CLIENT } from '../../databases';
import { IInsert, IUpdate } from './interfaces';


const practicesFacade = {
    createAPractice: async (data: IInsert) => {

        const {
            id, statement_address_same_as_address,
            statement_address, statement_options, statement_messages, location
        } = data

        const { pay_to_address_same_as_address, payment_address } = location as any

        delete data.statement_address
        delete data.statement_options
        delete data.statement_messages
        delete data.location
        // @ts-ignore
        delete location.payment_address


        try {
            await PG_CLIENT.query('BEGIN')
            const { rows } = await PG_CLIENT.query(practicesQueries.createAPractice(data));
            const { rows: loc } = await PG_CLIENT.query(locationQueries.create({ practice_id: id, ...(location as any) }));
            const { rows: options } = await PG_CLIENT.query(practiceStatementOptionsQueries.create({ practice_id: id, ...statement_options }))
            const { rows: messages } = await PG_CLIENT.query(practiceStatementMessagesQueries.create({ practice_id: id, ...statement_messages }))

            rows[0].location = loc[0]
            rows[0].statement_options = options[0]
            rows[0].statement_messages = messages[0]

            if (!pay_to_address_same_as_address) {
                const { rows: paymentAddress } = await PG_CLIENT.query(locationPaymentAddressQueries.create({ practice_location_id: (location as any).id, ...payment_address }))
                rows[0].location.payment_address = paymentAddress[0]
            }

            if (!statement_address_same_as_address) {
                const { rows: statementAddress } = await PG_CLIENT.query(practiceStatementAddressQueries.create({ practice_id: id, ...statement_address }))
                rows[0].statement_address = statementAddress[0]
            }

            await PG_CLIENT.query('COMMIT')


            return rows;
        }
        catch (err) {
            console.error('Error while inserting practice data', err)
            await PG_CLIENT.query('ROLLBACK')

            throw err
        }

    },

    findPracticeById: async (Id: string) => {

        const { rows } = await PG_CLIENT.query(practicesQueries.findPracticeById(Id));

        if (!rows.length) return rows

        const { rows: location } = await PG_CLIENT.query(locationQueries.findByPracticeId(Id));
        const { rows: statement_address } = await PG_CLIENT.query(practiceStatementAddressQueries.findByPracticeId(Id));
        const { rows: statement_options } = await PG_CLIENT.query(practiceStatementOptionsQueries.findByPracticeId(Id));
        const { rows: statement_messages } = await PG_CLIENT.query(practiceStatementOptionsQueries.findByPracticeId(Id));
        const { rows: payment_address } = await PG_CLIENT.query(locationPaymentAddressQueries.findByLocationId(location[0].id));

        rows[0].location = location[0]
        rows[0].location.payment_address = payment_address[0]
        rows[0].statement_address = statement_address[0]
        rows[0].statement_options = statement_options[0]
        rows[0].statement_messages = statement_messages[0]

        return rows;
    },

    deletePracticeById: async (Id: string) => {

        try {

            const { rows: locations } = await PG_CLIENT.query(locationQueries.findByPracticeId(Id))

            const locationIds = locations.map(({ practice_location_id }: any) => practice_location_id)

            await PG_CLIENT.query('BEGIN')
            await PG_CLIENT.query(practiceStatementAddressQueries.deleteByPracticeId(Id))
            await PG_CLIENT.query(practiceStatementMessagesQueries.deleteByPracticeId(Id))
            await PG_CLIENT.query(practiceStatementOptionsQueries.deleteByPracticeId(Id))
            await PG_CLIENT.query(locationPaymentAddressQueries.deleteByLocationIds(locationIds))
            await PG_CLIENT.query(locationQueries.deleteBypracticeId(Id))
            const { rows } = await PG_CLIENT.query(practicesQueries.deletePracticesById(Id));
            await PG_CLIENT.query('COMMIT')

            return rows;
        } catch (err) {
            console.error('Error while deleting practice', err)
            await PG_CLIENT.query('ROLLBACK')
            throw err

        }
    },

    updatePracticeById: async (Id: string, data: IUpdate) => {
        const {
            statement_address_same_as_address,
            statement_address, statement_options, statement_messages, location
        } = data

        const { pay_to_address_same_as_address, payment_address } = location as any


        delete data.statement_address
        delete data.statement_options
        delete data.statement_messages
        delete data.location
        // @ts-ignore
        delete location.payment_address


        try {
            await PG_CLIENT.query('BEGIN')
            const { rows } = Object.keys(data).length ? await PG_CLIENT.query(practicesQueries.updatePracticeById(Id, data)) : { rows: [] };
            const { rows: loc } = Object.keys(location as any).length ? await PG_CLIENT.query(locationQueries.updateById((location as any).id, location as any)) : { rows: [] };
            const { rows: options } = Object.keys(statement_options as any).length ? await PG_CLIENT.query(practiceStatementOptionsQueries.updateByPracticeId(Id, statement_options as any)) : { rows: [] }
            const { rows: messages } = Object.keys(statement_messages as any).length ? await PG_CLIENT.query(practiceStatementMessagesQueries.updateByPracticeId(Id, statement_messages as any)) : { rows: [] }

            rows[0].location = loc[0]
            rows[0].statement_options = options[0]
            rows[0].statement_messages = messages[0]

            if (!pay_to_address_same_as_address) {
                const { rows: fetchAddress } = await PG_CLIENT.query(locationPaymentAddressQueries.findByLocationId((location as any).id));
                if (fetchAddress.length) {

                    const { rows: paymentAddress } = await PG_CLIENT.query(locationPaymentAddressQueries.updateByLocationId((location as any).id, { practice_location_id: (location && location.id), ...payment_address }))
                    rows[0].payment_address = paymentAddress[0]
                } else {
                    const { rows: paymentAddress } = await PG_CLIENT.query(locationPaymentAddressQueries.create({ practice_location_id: (location as any).id, ...payment_address }))
                    rows[0].location.payment_address = paymentAddress[0]
                }

            } else await PG_CLIENT.query(locationPaymentAddressQueries.deleteByLocationId((location as any).id))


            if (!statement_address_same_as_address) {
                const { rows: fetchedAddress } = await PG_CLIENT.query(practiceStatementAddressQueries.findByPracticeId(Id));

                if (fetchedAddress.length) {

                    const { rows: statementAddress } = await PG_CLIENT.query(practiceStatementAddressQueries.updateByPracticeId(Id, statement_address as any))
                    rows[0].statement_address = statementAddress[0]
                } else {
                    const { rows: statementAddress } = await PG_CLIENT.query(practiceStatementAddressQueries.create({ practice_id: Id, ...statement_address }))
                    rows[0].statement_address = statementAddress[0]

                }


            } else await PG_CLIENT.query(practiceStatementAddressQueries.deleteByPracticeId(Id))

            await PG_CLIENT.query('COMMIT')


            return rows;
        }
        catch (err) {
            console.error('Error while updating practice data', err)
            await PG_CLIENT.query('ROLLBACK')

            throw err
        }
    },
    findAll: async () => {
        const { rows } = await PG_CLIENT.query(practicesQueries.findAllPractices())
        return rows
    }
};

export { practicesFacade };