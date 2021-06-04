import { IPlanFees, IPlanFeesUpdatedData } from './interfaces';
export declare const planFeesFacade: {
    create: (data: IPlanFees) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPlanFeesUpdatedData) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
