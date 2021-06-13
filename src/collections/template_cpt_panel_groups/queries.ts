import { ITemplateCPTPanelGroup, IPanelGroupCPTs, IPanelGroupCPTsModifier, IPanelGroupCPTsICD } from './interfaces';

export const CPTPanelGroupQueries = {
    
    create: (data: ITemplateCPTPanelGroup) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO template_cpt_panel_groups(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM template_cpt_panel_groups WHERE id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM template_cpt_panel_groups WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: ITemplateCPTPanelGroup) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE template_cpt_panel_groups SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findByPractice: (Id: string) => {
        return {
            text: `SELECT * FROM template_cpt_panel_groups WHERE practice_id = $1`,
            values: [Id]
        }
    },
}

export const panelGroupCPTsQueries = {

    create: (data: IPanelGroupCPTs) => {

        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            // @ts-ignore
            return data[k]

        })

        return {
            text: `INSERT INTO template_cpt_panel_groups_cpts(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM template_cpt_panel_groups_cpts WHERE id = $1`,
            values: [Id]
        }
    },

    findByGroupId: (Id: string) => {
        return {
            text: `SELECT * FROM template_cpt_panel_groups_cpts WHERE template_cpt_panel_group_id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM template_cpt_panel_groups_cpts WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    deleteByGroupId: (Id: string) => {
        return {
            text: `DELETE FROM template_cpt_panel_groups_cpts WHERE template_cpt_panel_group_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPanelGroupCPTs) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE template_cpt_panel_groups_cpts SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            // @ts-ignore
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM template_cpt_panel_groups_cpts`,
            values: []
        }
    },
}

export const panelGroupCPTsModifiers = {

    create: (data: IPanelGroupCPTsModifier) => {

        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            // @ts-ignore
            return data[k]

        })

        return {
            text: `INSERT INTO template_cpt_panel_groups_cpts_modifiers(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM template_cpt_panel_groups_cpts_modifiers WHERE id = $1`,
            values: [Id]
        }
    },

    findBygroupCPTId: (Id: string) => {
        return {
            text: `SELECT * FROM template_cpt_panel_groups_cpts_modifiers WHERE template_cpt_panel_groups_cpt_id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM template_cpt_panel_groups_cpts_modifiers WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    deleteBygroupCPTIds: (Ids: any) => {
        return {
            text: `DELETE FROM template_cpt_panel_groups_cpts_modifiers WHERE template_cpt_panel_groups_cpt_id IN ($1) RETURNING *`,
            values: [Ids]
        };
    },

    updateById: (Id: string, data: IPanelGroupCPTsModifier) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE template_cpt_panel_groups_cpts_modifiers SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            // @ts-ignore
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM template_cpt_panel_groups_cpts_modifiers`,
            values: []
        }
    },
}


export const panelGroupCPTsICDs = {

    create: (data: IPanelGroupCPTsICD) => {

        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            // @ts-ignore
            return data[k]

        })

        return {
            text: `INSERT INTO template_cpt_panel_groups_cpts_icds(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM template_cpt_panel_groups_cpts_icds WHERE id = $1`,
            values: [Id]
        }
    },

    findBygroupCPTId: (Id: string) => {
        return {
            text: `SELECT * FROM template_cpt_panel_groups_cpts_icds WHERE template_cpt_panel_groups_cpt_id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM template_cpt_panel_groups_cpts_icds WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    deleteBygroupCPTIds: (Ids: any) => {
        return {
            text: `DELETE FROM template_cpt_panel_groups_cpts_icds WHERE template_cpt_panel_groups_cpt_id IN ($1) RETURNING *`,
            values: [Ids]
        };
    },

    updateById: (Id: string, data: IPanelGroupCPTsICD) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE template_cpt_panel_groups_cpts_icds SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            // @ts-ignore
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM template_cpt_panel_groups_cpts_icds`,
            values: []
        }
    },
}