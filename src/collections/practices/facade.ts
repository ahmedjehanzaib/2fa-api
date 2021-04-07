import { practicesQueries, practiceStatementAddressQueries, practiceStatementMessagesQueries, practiceStatementOptionsQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IInsert, IUpdate } from './interfaces';


const practicesFacade = {
    createAPractice: async (data: IInsert) => {
        const { pay_to_address_same_as_address, statement_address_same_as_address, payment_address, statement_address, statement_options, statement_messages } = data
        delete data.payment_address
        delete data.statement_address
        delete data.statement_options
        delete data.statement_messages

        const { rows } = await PG_CLIENT.query(practicesQueries.createAPractice(data));
        const { rows: options } = await PG_CLIENT.query(practiceStatementOptionsQueries.create(statement_options))
        const { rows: messages } = await PG_CLIENT.query(practiceStatementMessagesQueries.create(statement_messages))

        rows[0].statement_options = options[0]
        rows[0].statement_messages = messages[0]

        // if (!pay_to_address_same_as_address) {
        //     const { rows: paymentAddress } = await PG_CLIENT.query(practiceStatementAddressQueries.create(payment_address))
        //     rows[0].payment_address = paymentAddress[0]
        // }
        if (!statement_address_same_as_address) {
            const { rows: statementAddress } = await PG_CLIENT.query(practiceStatementAddressQueries.create(statement_address))
            rows[0].statement_address = statementAddress[0]
        }

        return rows;
    },

    findPracticeById: async (clientId: string) => {
        const { rows } = await PG_CLIENT.query(practicesQueries.findPracticeById(clientId));
        return rows;
    },

    deletePracticeById: async (Id: string) => {
        await PG_CLIENT.query(practiceStatementAddressQueries.deleteByPracticeId(Id))
        await PG_CLIENT.query(practiceStatementMessagesQueries.deleteByPracticeId(Id))
        await PG_CLIENT.query(practiceStatementOptionsQueries.deleteByPracticeId(Id))
        // await PG_CLIENT.query(practiceStatementOptionsQueries.deleteByPracticeId(Id))

        const { rows } = await PG_CLIENT.query(practicesQueries.deletePracticesById(Id));
        return rows;
    },

    updatePracticeById: async (Id: string, data: IUpdate) => {
        const { pay_to_address_same_as_address, statement_address_same_as_address, payment_address, statement_address, statement_options, statement_messages } = data
        delete data.payment_address
        delete data.statement_address
        delete data.statement_options
        delete data.statement_messages
        const { rows } = await PG_CLIENT.query(practicesQueries.updatePracticeById(Id, data));
        const { rows: options } = await PG_CLIENT.query(practiceStatementOptionsQueries.updateByPracticeId(Id, statement_options))
        const { rows: messages } = await PG_CLIENT.query(practiceStatementMessagesQueries.updateByPracticeId(Id, statement_messages))

        rows[0].statement_options = options[0]
        rows[0].statement_messages = messages[0]
        // if (!pay_to_address_same_as_address) {
        //     const { rows: paymentAddress } = await PG_CLIENT.query(practiceStatementAddressQueries.create(payment_address))
        //     rows[0].payment_address = paymentAddress[0]
        // }
        if (!statement_address_same_as_address) {
            const { rows: exists } = await PG_CLIENT.query(practiceStatementAddressQueries.findByPracticeId(Id))
            if (exists.length) {

                const { rows: statementAddress } = await PG_CLIENT.query(practiceStatementAddressQueries.updateById(exists[0].id, statement_address))
                rows[0].statement_address = statementAddress[0]
            } else {
                const { rows: statementAddress } = await PG_CLIENT.query(practiceStatementAddressQueries.create({ practice_id: Id, ...statement_address }))
                rows[0].statement_address = statementAddress[0]

            }
        } else {
            const { rows: statementAddress } = await PG_CLIENT.query(practiceStatementAddressQueries.deleteByPracticeId(Id))
            rows[0].statement_address = statementAddress[0]
        }

        return rows;
    }
};

export { practicesFacade };