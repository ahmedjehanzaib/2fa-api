import { IPracticePlan, IPracticePlanUpdatedData, IPlanAddress, IPlanAddressUpdatedData, IPlanFees, IPlanFeesUpdatedData, IProviderInsuranceBillingOption } from './interfaces';
export declare const practicePlansQueries: {
    create: (data: IPracticePlan) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, locationData: IPracticePlanUpdatedData) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const planAddressesQueries: {
    create: (data: IPlanAddress) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    findByplanId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteByPlanId: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, locationData: IPlanAddressUpdatedData) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const planFeesQueries: {
    create: (data: IPlanFees) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    findByplanId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteByPlanId: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, locationData: IPlanFeesUpdatedData) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const providerInsuranceBillingOptionsQueries: {
    create: (data: IProviderInsuranceBillingOption) => {
        text: string;
        values: any[];
    };
    findByProviderId: (providerId: string) => {
        text: string;
        values: string[];
    };
    deleteByPlanId: (providerId: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: IProviderInsuranceBillingOption) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
