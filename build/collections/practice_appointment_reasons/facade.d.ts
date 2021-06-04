import { IPracticeAppointmentReasons } from './interfaces';
export declare const practiceAppointmentReasonsFacade: {
    create: (data: IPracticeAppointmentReasons) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeAppointmentReasons) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
