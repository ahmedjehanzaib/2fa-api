export interface IPlanTypes extends IPlanTypesUpdatedData {
    id: string
};

export interface IPlanTypesUpdatedData {
    [index: string]: any,
    name: string,
    description: string
}