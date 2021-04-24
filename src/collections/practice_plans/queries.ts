import {
    IPracticePlan, IPracticePlanUpdatedData, IPlanAddress,
    IPlanAddressUpdatedData, IPlanFees, IPlanFeesUpdatedData,
    IProviderInsuranceBillingOption
} from './interfaces';

export const practicePlansQueries = {
    create: (data: IPracticePlan) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_plan(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT pp.*,
            p."name" AS practice_name,
            ppc."name" as category_name,
            to_json(pa.*) as address,
            to_json(pf.*) as fees,
            to_json(pibo.*) as insurance_billing_options 
            FROM practice_plan pp
            LEFT JOIN practices p
            ON pp.practice_id = p.id
            left join practice_plan_category ppc 
            on pp.plan_category_id = ppc.id 
            left join plan_addresses pa 
            on pp.id = pa.plan_id 
            left join plan_fees pf 
            on pp.id = pf.plan_id
            left join provider_insurance_billing_option pibo 
            on pp.id = pibo.plan_id  WHERE pp.id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_plan WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, locationData: IPracticePlanUpdatedData) => {
        let setQueryPart = ``
        Object.keys(locationData).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(locationData).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_plan SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(locationData).map((key) => locationData[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT pp.*,
            p."name" AS practice_name,
            ppc."name" as category_name,
            to_json(pa.*) as address,
            to_json(pf.*) as fees,
            to_json(pibo.*) as insurance_billing_options 
            FROM practice_plan pp
            LEFT JOIN practices p
            ON pp.practice_id = p.id
            left join practice_plan_category ppc 
            on pp.plan_category_id = ppc.id 
            left join plan_addresses pa 
            on pp.id = pa.plan_id 
            left join plan_fees pf 
            on pp.id = pf.plan_id
            left join provider_insurance_billing_option pibo 
            on pp.id = pibo.plan_id`,
            values: []
        }
    },
}

export const planAddressesQueries = {
    create: (data: IPlanAddress) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO plan_addresses(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: ` SELECT * FROM plan_addresses WHERE id = $1`,
            values: [Id]
        }
    },
    findByplanId: (Id: string) => {
        return {
            text: ` SELECT * FROM plan_addresses WHERE plan_id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM plan_addresses WHERE id = $1 RETURNING *`,
            values: [Id]
        };

    },

    deleteByPlanId: (Id: string) => {
        return {
            text: `DELETE FROM plan_addresses WHERE plan_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, locationData: IPlanAddressUpdatedData) => {
        let setQueryPart = ``
        Object.keys(locationData).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(locationData).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE plan_addresses SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(locationData).map((key) => locationData[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM plan_addresses`,
            values: []
        }
    },
}

export const planFeesQueries = {
    create: (data: IPlanFees) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO plan_fees(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: ` SELECT * FROM plan_fees WHERE id = $1`,
            values: [Id]
        }
    },
    findByplanId: (Id: string) => {
        return {
            text: ` SELECT * FROM plan_fees WHERE plan_id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM plan_fees WHERE id = $1 RETURNING *`,
            values: [Id]
        };

    },

    deleteByPlanId: (Id: string) => {
        return {
            text: `DELETE FROM plan_fees WHERE plan_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, locationData: IPlanFeesUpdatedData) => {
        let setQueryPart = ``
        Object.keys(locationData).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(locationData).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE plan_fees SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(locationData).map((key) => locationData[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM plan_fees`,
            values: []
        }
    },
}

export const providerInsuranceBillingOptionsQueries = {
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

    deleteByPlanId: (providerId: string) => {
        return {
            text: `DELETE FROM provider_insurance_billing_option WHERE plan_id = $1 RETURNING *`,
            values: [providerId]
        };
    },

    updateById: (Id: string, data: IProviderInsuranceBillingOption) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE provider_insurance_billing_option SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
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