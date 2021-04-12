export interface IPracticeRole extends IPracticeRoleUpdatedData {
    id: string
};

export interface IPracticeRoleUpdatedData {
    [index: string]: any,
    name: string,
    practice_id: string,
    description?: string
}