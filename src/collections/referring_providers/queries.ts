import { IReferringProvider, IReferringProviderUpdatedData } from './interfaces';

const referringProvidersQueries = {
    createAReferingProvider: (rpData: IReferringProvider) => {

        const columns = Object.keys(rpData)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return rpData[k]

        })

        return {
            text: `INSERT INTO referring_providers(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findReferingProviderById: (rpId: string) => {
        return {
            text: ` SELECT * FROM referring_providers WHERE id = $1`,
            values: [rpId]
        }
    },

    deleteReferingProviderById: (rpId: string) => {
        return {
            text: `DELETE FROM referring_providers WHERE id = $1 RETURNING *`,
            values: [rpId]
        };
    },

    updateReferingProviderById: (rpId: string, rpData: IReferringProviderUpdatedData) => {
        let setQueryPart = ``
        Object.keys(rpData).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(rpData).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE referring_providers SET ${setQueryPart} WHERE id = '${rpId}' RETURNING *`,
            values: Object.keys(rpData).map((key) => rpData[key])
        };
    },

    findAllReferingProviders: () => {
        return {
            text: `SELECT * FROM referring_providers`,
            values: []
        }
    },
}

export { referringProvidersQueries };