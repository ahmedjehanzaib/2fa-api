import { IPracticeAppointmentStatus } from './interfaces';
export declare const practiceAppointmentStatusFacade: {
    create: (data: IPracticeAppointmentStatus) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeAppointmentStatus) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
