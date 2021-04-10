import {
    IPractice, ILocation, IPracticeUpdatedData, ILocationUpdatedData, ILocationPaymentAddress,
    IPracticeStatementAddress, IPracticeStatementMessages, IPracticeStatementOptions
} from './interfaces';

export const practicesQueries = {
    createAPractice: (data: IPractice) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practices(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findPracticeById: (practiceId: string) => {
        return {
            text: ` SELECT * FROM practices WHERE id = $1`,
            values: [practiceId]
        }
    },

    deletePracticesById: (practiceId: string) => {
        return {
            text: `DELETE FROM practices WHERE id = $1 RETURNING *`,
            values: [practiceId]
        };
    },

    updatePracticeById: (practiceId: string, practiceData: IPracticeUpdatedData) => {
        let setQueryPart = ``
        Object.keys(practiceData).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(practiceData).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practices SET ${setQueryPart} WHERE id = '${practiceId}' RETURNING *`,
            values: Object.keys(practiceData).map((key) => practiceData[key])
        };
    
    },
    findAllPractices: () => {
        return {
            text: ` SELECT * FROM practices`,
            values: []
        }
    }
}

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

    findById: (locationId: string) => {
        return {
            text: ` SELECT * FROM practice_locations WHERE id = $1`,
            values: [locationId]
        }
    },

    findByPracticeId: (practiceId: string) => {
        return {
            text: ` SELECT * FROM practice_locations WHERE practice_id = $1`,
            values: [practiceId]
        }
    },

    deleteBypracticeId: (practiceId: string) => {
        return {
            text: `DELETE FROM practice_locations WHERE practice_id = $1 RETURNING *`,
            values: [practiceId]
        };
    },

    updateById: (locationId: string, locationData: ILocationUpdatedData) => {
        let setQueryPart = ``
        Object.keys(locationData).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(locationData).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_locations SET ${setQueryPart} WHERE id = '${locationId}' RETURNING *`,
            values: Object.keys(locationData).map((key) => locationData[key])
        };
    },
}

export const practiceStatementAddressQueries = {
    create: (data: IPracticeStatementAddress) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_statement_address(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findByPracticeId: (practiceId: string) => {
        return {
            text: ` SELECT * FROM practice_statement_address WHERE practice_id = $1`,
            values: [practiceId]
        }
    },

    deleteByPracticeId: (practiceId: string) => {
        return {
            text: `DELETE FROM practice_statement_address WHERE practice_id = $1 RETURNING *`,
            values: [practiceId]
        };
    },

    updateByPracticeId: (practiceId: string, data: IPracticeStatementAddress) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_statement_address SET ${setQueryPart} WHERE practice_id = '${practiceId}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
}

export const practiceStatementMessagesQueries = {
    create: (data: IPracticeStatementMessages) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_statement_messages(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findByPracticeId: (practiceId: string) => {
        return {
            text: ` SELECT * FROM practice_statement_messages WHERE practice_id = $1`,
            values: [practiceId]
        }
    },

    deleteByPracticeId: (practiceId: string) => {
        return {
            text: `DELETE FROM practice_statement_messages WHERE practice_id = $1 RETURNING *`,
            values: [practiceId]
        };
    },

    updateByPracticeId: (practiceId: string, practiceData: IPracticeStatementMessages) => {
        let setQueryPart = ``
        Object.keys(practiceData).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(practiceData).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_statement_messages SET ${setQueryPart} WHERE practice_id = '${practiceId}' RETURNING *`,
            values: Object.keys(practiceData).map((key) => practiceData[key])
        };
    },
}

export const practiceStatementOptionsQueries = {
    create: (data: IPracticeStatementOptions) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_statement_options(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findByPracticeId: (practiceId: string) => {
        return {
            text: ` SELECT * FROM practice_statement_options WHERE practice_id = $1`,
            values: [practiceId]
        }
    },

    deleteByPracticeId: (practiceId: string) => {
        return {
            text: `DELETE FROM practice_statement_options WHERE practice_id = $1 RETURNING *`,
            values: [practiceId]
        };
    },

    updateByPracticeId: (practiceId: string, practiceData: IPracticeStatementOptions) => {
        let setQueryPart = ``
        Object.keys(practiceData).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(practiceData).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_statement_options SET ${setQueryPart} WHERE practice_id = '${practiceId}' RETURNING *`,
            values: Object.keys(practiceData).map((key) => practiceData[key])
        };
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

    deleteByLocationId: (locationId: any[]) => {
        return {
            text: `DELETE FROM practice_location_pay_to_address WHERE practice_location_id = $1 RETURNING *`,
            values: [locationId]
        };
    },
    deleteByLocationIds: (locationIds: any[]) => {
        return {
            text: `DELETE FROM practice_location_pay_to_address WHERE practice_location_id IN (${locationIds.join(',')}) RETURNING *`,
            values: []
        };
    },

    updateByLocationId: (locationId: string, locationData: ILocationPaymentAddress) => {
        let setQueryPart = ``
        Object.keys(locationData).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(locationData).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });

        return {
            text: `UPDATE practice_location_pay_to_address SET ${setQueryPart} WHERE practice_location_id = '${locationId}' RETURNING *`,
            values: Object.keys(locationData).map((key) => locationData[key])
        };
    },
}