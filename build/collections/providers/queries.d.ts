import { IProvider, IProviderUpdatedData, IProviderPayToAddress, IProviderPayToAddressUpdatedData, IProviderInsuranceBillingOption, IProviderInsuranceBillingOptionUpdatedData } from './interfaces';
declare const providersQueries: {
    createAProvider: (data: IProvider) => {
        text: string;
        values: any[];
    };
    findProviderById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteProviderById: (Id: string) => {
        text: string;
        values: string[];
    };
    updateProviderById: (Id: string, data: IProviderUpdatedData) => {
        text: string;
        values: (string | boolean | null | undefined)[];
    };
    findAllProviders: () => {
        text: string;
        values: never[];
    };
};
declare const providerPayToAddressQueries: {
    create: (data: IProviderPayToAddress) => {
        text: string;
        values: any[];
    };
    findByProviderId: (providerId: string) => {
        text: string;
        values: string[];
    };
    deleteByProviderId: (providerId: string) => {
        text: string;
        values: string[];
    };
    updateById: (providerId: string, data: IProviderPayToAddressUpdatedData) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
declare const providerInsuranceBillingOptionsQueries: {
    create: (data: IProviderInsuranceBillingOption) => {
        text: string;
        values: any[];
    };
    findByProviderId: (providerId: string) => {
        text: string;
        values: string[];
    };
    deleteByProviderId: (providerId: string) => {
        text: string;
        values: string[];
    };
    updateByProviderId: (providerId: string, data: IProviderInsuranceBillingOptionUpdatedData) => {
        text: string;
        values: (string | number | boolean)[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export { providersQueries, providerPayToAddressQueries, providerInsuranceBillingOptionsQueries };
