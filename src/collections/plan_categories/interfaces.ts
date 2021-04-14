export interface IPlanCategories extends IPlanCategoriesUpdatedData {
    id: string
};

export interface IPlanCategoriesUpdatedData {
    [index: string]: any,
    name: string,
    practice_id: string,
    description: string
}