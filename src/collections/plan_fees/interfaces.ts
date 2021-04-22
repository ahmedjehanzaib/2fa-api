export interface IPlanFees extends IPlanFeesUpdatedData {
    id: string
};

export interface IPlanFeesUpdatedData {
    [index: string]: any,
    cpt_id: number,
    plan_id: string,
    fee: number,
    allowed: boolean
}