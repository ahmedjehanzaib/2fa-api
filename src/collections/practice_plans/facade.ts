import { v4 as uuidv4 } from 'uuid';

import { practicePlansQueries, planAddressesQueries, planFeesQueries, providerInsuranceBillingOptionsQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { InsertData, UpdateData } from './interfaces';


export const practicePlanFacade = {

    create: async (data: InsertData) => {
        const { id, address, fees, insurance_billing_options } = data

        delete data.address
        delete data.fees
        delete data.insurance_billing_options

        try {

            await PG_CLIENT.query('BEGIN')

            const { rows } = await PG_CLIENT.query(practicePlansQueries.create(data))

            if (address) {
                const { rows: planAddress } = await PG_CLIENT.query(planAddressesQueries.create({ id: uuidv4(), plan_id: id, ...address }))
                rows[0].address = planAddress[0]
            }

            if (fees) {
                const { rows: planFees } = await PG_CLIENT.query(planFeesQueries.create({ id: uuidv4(), plan_id: id, ...fees }))
                rows[0].fees = planFees[0]
            }

            if (insurance_billing_options) {
                const { rows: insurance } = await PG_CLIENT.query(providerInsuranceBillingOptionsQueries.create({ plan_id: id, ...insurance_billing_options }))
                rows[0].insurance_billing_options = insurance[0]
            }

            await PG_CLIENT.query('COMMIT')


            return rows;
        } catch (err) {
            console.error('Error while creating practice plan')
            await PG_CLIENT.query('ROLLBACK')
            throw err

        }


    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practicePlansQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        try {

            await PG_CLIENT.query('BEGIN')

            await PG_CLIENT.query(planAddressesQueries.deleteByPlanId(Id))
            await PG_CLIENT.query(planFeesQueries.deleteByPlanId(Id))
            const { rows } = await PG_CLIENT.query(practicePlansQueries.deleteById(Id))

            await PG_CLIENT.query('COMMIT')

            return rows;


        } catch (err) {
            console.error('Error while deleting practice plan')
            await PG_CLIENT.query('ROLLBACK')
            throw err

        }
    },

    updateById: async (Id: string, data: UpdateData) => {
        const { address, fees, insurance_billing_options } = data

        delete data.address
        delete data.fees
        delete data.insurance_billing_options

        try {

            await PG_CLIENT.query('BEGIN')

            const { rows } = await PG_CLIENT.query(practicePlansQueries.updateById(Id, data))

            if (address) {
                if (address.id) {
                    const { rows: planAddress } = await PG_CLIENT.query(planAddressesQueries.updateById(address.id, address))
                    rows[0].address = planAddress[0]

                } else {
                    const { rows: planAddress } = await PG_CLIENT.query(planAddressesQueries.create({ id: uuidv4(), plan_id: Id, ...address }))
                    rows[0].address = planAddress[0]
                }
            } else await PG_CLIENT.query(planAddressesQueries.deleteByPlanId(Id))


            if (fees) {
                if (fees.id) {
                    const { rows: planFees } = await PG_CLIENT.query(planFeesQueries.updateById(fees.id, fees))
                    rows[0].fees = planFees[0]

                } else {

                    const { rows: planFees } = await PG_CLIENT.query(planFeesQueries.create({ id: uuidv4(), plan_id: Id, ...fees }))
                    rows[0].fees = planFees[0]
                }
            } else await PG_CLIENT.query(planFeesQueries.deleteByPlanId(Id))

            if (insurance_billing_options) {

                if (insurance_billing_options.id) {
                    const { rows: insurance } = await PG_CLIENT.query(providerInsuranceBillingOptionsQueries
                        .updateById(insurance_billing_options.id, insurance_billing_options))
                    rows[0].insurance_billing_options = insurance[0]

                } else {

                    const { rows: insurance } = await PG_CLIENT.query(providerInsuranceBillingOptionsQueries
                        .create({ plan_id: Id, ...insurance_billing_options }))
                    rows[0].insurance_billing_options = insurance[0]
                }
            } else await PG_CLIENT.query(providerInsuranceBillingOptionsQueries.deleteByPlanId(Id))


            await PG_CLIENT.query('COMMIT')


            return rows;
        } catch (err) {
            console.error('Error while updating practice plan')
            await PG_CLIENT.query('ROLLBACK')
            throw err

        }

    },
    findAll: async () => {
        const { rows } = await PG_CLIENT.query(practicePlansQueries.findAll())

        return rows
    }
};