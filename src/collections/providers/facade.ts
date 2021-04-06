import { providersQueries, providerPayToAddressQueries, providerInsuranceBillingOptionsQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import {
    IInsertData, IUpdateData
} from './interfaces';




const providersFacade = {
    createAProvider: async (data: IInsertData) => {
        const { id, is_pay_to_address, payment_address, insurance_billing_options } = data
        delete data.payment_address
        delete data.insurance_billing_options

        const { rows } = await PG_CLIENT.query(providersQueries.createAProvider(data));
        const { rows: insurance } = await PG_CLIENT.query(providerInsuranceBillingOptionsQueries.create({ provider_id: id, ...insurance_billing_options }))

        rows[0].insurance_billing_options = insurance[0]

        if (is_pay_to_address === false) {
            const { rows: inserted } = await PG_CLIENT.query(providerPayToAddressQueries.create({ provider_id: id, ...payment_address }))
            rows[0].payment_address = inserted[0]
        }

        return rows;
    },

    findProviderById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(providersQueries.findProviderById(Id));
        const { rows: insurance } = await PG_CLIENT.query(providerInsuranceBillingOptionsQueries.findByProviderId(Id));
        const { rows: payment_address } = await PG_CLIENT.query(providerPayToAddressQueries.findByProviderId(Id));
        rows[0].insurance_billing_options = insurance[0]
        rows[0].payment_address = payment_address[0]
        return rows;
    },

    deleteProviderById: async (Id: string) => {
        await PG_CLIENT.query(providerPayToAddressQueries.deleteByProviderId(Id))
        await PG_CLIENT.query(providerInsuranceBillingOptionsQueries.deleteByProviderId(Id))

        const { rows } = await PG_CLIENT.query(providersQueries.deleteProviderById(Id));

        return rows;
    },

    updateProviderById: async (Id: string, data: IUpdateData) => {
        const { is_pay_to_address, payment_address, insurance_billing_options } = data

        delete data.payment_address
        delete data.insurance_billing_options

        const { rows } = await PG_CLIENT.query(providersQueries.updateProviderById(Id, data));
        const { rows: insurance } = await PG_CLIENT.query(providerInsuranceBillingOptionsQueries.updateByProviderId(Id, insurance_billing_options as any));

        rows[0].insurance_billing_options = insurance[0]


        if (!is_pay_to_address) {
            const { rows: paymentData } = await PG_CLIENT.query(providerPayToAddressQueries.findByProviderId(Id))

            if (paymentData.length) {
                const { rows: updated } = await PG_CLIENT.query(providerPayToAddressQueries.updateById(paymentData[0].id, payment_address as any))
                rows[0].payment_address = updated[0]

            }
            else {
                const { rows: inserted } = await PG_CLIENT.query(providerPayToAddressQueries.create({ provider_id: Id, ...payment_address }))
                rows[0].payment_address = inserted[0]

            }
        } else {
            await PG_CLIENT.query(providerPayToAddressQueries.deleteByProviderId(Id))
        }


        return rows;
    },

    findAllProviders: async () => {
        const { rows } = await PG_CLIENT.query(providersQueries.findAllProviders());
        return rows;
    },
};

export { providersFacade };