import {
    IProvider, IProviderUpdatedData, IProviderPayToAddress, IProviderPayToAddressUpdatedData,
    IProviderInsuranceBillingOption, IProviderInsuranceBillingOptionUpdatedData
} from './interfaces';

const providersQueries = {
    createAProvider: (data: IProvider) => {

        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO providers(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findProviderById: (Id: string) => {
        return {
            text: ` SELECT * FROM providers WHERE id = $1`,
            values: [Id]
        }
    },

    deleteProviderById: (Id: string) => {
        return {
            text: `DELETE FROM providers WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateProviderById: (Id: string, data: IProviderUpdatedData) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE providers SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },

    findAllProviders: () => {
        return {
            text: `SELECT * FROM providers`,
            values: []
        }
    },
}

const providerPayToAddressQueries = {
    create: (data: IProviderPayToAddress) => {

        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO provider_pay_to_address(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findByProviderId: (providerId: string) => {
        return {
            text: ` SELECT * FROM provider_pay_to_address WHERE provider_id = $1`,
            values: [providerId]
        }
    },

    deleteByProviderId: (providerId: string) => {
        return {
            text: `DELETE FROM provider_pay_to_address WHERE provider_id = $1 RETURNING *`,
            values: [providerId]
        };
    },

    updateById: (providerId: string, data: IProviderPayToAddressUpdatedData) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE provider_pay_to_address SET ${setQueryPart} WHERE id = '${providerId}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },

    findAll: () => {
        return {
            text: `SELECT * FROM provider_pay_to_address`,
            values: []
        }
    },
}

const providerInsuranceBillingOptionsQueries = {
    create: (data: IProviderInsuranceBillingOption) => {

        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO provider_insurance_billing_option(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findByProviderId: (providerId: string) => {
        return {
            text: ` SELECT * FROM provider_insurance_billing_option WHERE provider_id = $1`,
            values: [providerId]
        }
    },

    deleteByProviderId: (providerId: string) => {
        return {
            text: `DELETE FROM provider_insurance_billing_option WHERE provider_id = $1 RETURNING *`,
            values: [providerId]
        };
    },

    updateByProviderId: (providerId: string, data: IProviderInsuranceBillingOptionUpdatedData) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE provider_insurance_billing_option SET ${setQueryPart} WHERE provider_id = '${providerId}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },

    findAll: () => {
        return {
            text: `SELECT * FROM provider_insurance_billing_option`,
            values: []
        }
    },
}

export { providersQueries, providerPayToAddressQueries, providerInsuranceBillingOptionsQueries };