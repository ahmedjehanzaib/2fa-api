import { IPractice } from './interfaces';

const practicesQueries = {
    createAPractice: (practiceData: IPractice) => {
        return {
            text: `INSERT INTO practices(id, name, client_id, special_security_number, client_type, first_name, last_name, pay_to_address_same_as_address, statement_address_same_as_address,
                direct_secure_email, direct_secure_password, speciality)  VALUES ($1, $2, $3, $4,$5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
            values: [practiceData.id, practiceData.name, practiceData.client_id, practiceData.special_security_number, practiceData.client_type, practiceData.first_name, practiceData.last_name, practiceData.pay_to_address_same_as_address, practiceData.statement_address_same_as_address,
                 practiceData.direct_secure_email, practiceData.direct_secure_password, practiceData.speciality]
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

    updatePracticeById: (practiceId: string, practiceData: any) => {
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
}

const practiceStatementAddressQueries = {
    create: (data: any) => {
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

    updateById: (practiceId: string, practiceData: any) => {
		let setQueryPart = ``
		Object.keys(practiceData).forEach((key, index) => {
			setQueryPart += ` ${key}=$${index + 1}`
			if (Object.keys(practiceData).length !== (index + 1)) {
				setQueryPart += `,`
			}
		});
		return {
			text: `UPDATE practice_statement_address SET ${setQueryPart} WHERE id = '${practiceId}' RETURNING *`,
			values: Object.keys(practiceData).map((key) => practiceData[key])
		};
	},
}

const practiceStatementMessagesQueries = {
    create: (data: any) => {
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

    updateByPracticeId: (practiceId: string, practiceData: any) => {
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

const practiceStatementOptionsQueries = {
    create: (data: any) => {
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

    updateByPracticeId: (practiceId: string, practiceData: any) => {
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

export { practicesQueries, practiceStatementAddressQueries, practiceStatementMessagesQueries, practiceStatementOptionsQueries };