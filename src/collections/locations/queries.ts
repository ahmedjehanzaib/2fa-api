import { ILocation, ILocationUpdatedData, ILocationPaymentAddress } from './interfaces';

export const locationQueries = {
    create: (data: ILocation) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_locations(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: ` SELECT pl.*,
            p."name" AS practice_name
            FROM practice_locations pl 
            LEFT JOIN practices p
            ON pl.practice_id = p.id  WHERE pl.id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_locations WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, locationData: ILocationUpdatedData) => {
        let setQueryPart = ``
        Object.keys(locationData).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(locationData).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_locations SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(locationData).map((key) => locationData[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT pl.*,
            p."name" AS practice_name
            FROM practice_locations pl 
            LEFT JOIN practices p
                   ON pl.practice_id = p.id 
            `,
            values: []
        }
    },
}

export const locationPaymentAddressQueries = {
    create: (data: ILocationPaymentAddress) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_location_pay_to_address(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findByLocationId: (Id: string) => {
        return {
            text: ` SELECT * FROM practice_location_pay_to_address WHERE practice_location_id = $1`,
            values: [Id]
        }
    },

    deleteLocationById: (Id: string) => {
        return {
            text: `DELETE FROM practice_location_pay_to_address WHERE practice_location_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateByLocationId: (Id: string, locationData: ILocationPaymentAddress) => {
        let setQueryPart = ``
        Object.keys(locationData).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(locationData).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });

        return {
            text: `UPDATE practice_location_pay_to_address SET ${setQueryPart} WHERE practice_location_id = '${Id}' RETURNING *`,
            values: Object.keys(locationData).map((key) => locationData[key])
        };
    },
}