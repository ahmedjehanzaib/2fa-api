import { locationQueries, locationPaymentAddressQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IInsertData, IUpdateData } from './interfaces';


const locationsFacade = {

    createALocation: async (data: IInsertData) => {
        const { id, pay_to_address_same_as_address, payment_address } = data

        delete data.payment_address

        try {
            await PG_CLIENT.query('BEGIN')
            const { rows } = await PG_CLIENT.query(locationQueries.create(data));

            if (!pay_to_address_same_as_address) {

                const { rows: paymentAddress } = await PG_CLIENT.query(locationPaymentAddressQueries.create({ practice_location_id: id, ...(payment_address as any) }));
                rows[0].payment_address = paymentAddress[0]
            }
            await PG_CLIENT.query('COMMIT')

            return rows;
        } catch (err) {
            console.error('Error while inserting practice location', err)
            await PG_CLIENT.query('ROLLBACK')

            throw err

        }

    },

    findLocationById: async (locationId: string) => {
        const { rows } = await PG_CLIENT.query(locationQueries.findById(locationId));

        if(!rows.length) return rows
        
        const { rows: paymentAddress } = await PG_CLIENT.query(locationPaymentAddressQueries.findByLocationId(locationId));
        rows[0].payment_address = paymentAddress[0]
        return rows;
    },

    deleteLocationById: async (locationId: string) => {

        try {
            await PG_CLIENT.query('BEGIN')
            await PG_CLIENT.query(locationPaymentAddressQueries.deleteLocationById(locationId));
            const { rows } = await PG_CLIENT.query(locationQueries.deleteById(locationId));
            await PG_CLIENT.query('COMMIT')

            return rows;
        } catch (err) {
            console.error('Error while deleting practice location')
            await PG_CLIENT.query('ROLLBACK')

            throw err
        }
    },

    updateLocationById: async (locationId: string, data: IUpdateData) => {
        const { pay_to_address_same_as_address, payment_address } = data

        delete data.payment_address

        try {
            await PG_CLIENT.query('BEGIN')
            const { rows } = await PG_CLIENT.query(locationQueries.updateById(locationId, data));


            if (!pay_to_address_same_as_address) {
                const { rows: fetchedPaymentAddress } = await PG_CLIENT.query(locationPaymentAddressQueries.findByLocationId(locationId));

                if (fetchedPaymentAddress.length) {
                    const { rows: paymentAddress } = await PG_CLIENT.query(locationPaymentAddressQueries.updateByLocationId(locationId, payment_address as any));
                    rows[0].payment_address = paymentAddress[0]

                } else {
                    const { rows: paymentAddress } = await PG_CLIENT.query(locationPaymentAddressQueries.create({ practice_location_id: locationId, ...(payment_address as any) }));
                    rows[0].payment_address = paymentAddress[0]
                }

            } else await PG_CLIENT.query(locationPaymentAddressQueries.deleteLocationById(locationId));
            await PG_CLIENT.query('COMMIT')

            return rows;
        }
        catch (err) {
            console.error('Error while updating practice location')
            await PG_CLIENT.query('ROLLBACK')

            throw err
        }

    },
    findAll: async () => {
        const { rows } = await PG_CLIENT.query(locationQueries.findAll())

        return rows
    }
};

export { locationsFacade };