export interface IUser extends IUserUpdateData {
    id: string;
}
export interface IUserUpdateData {
    [index: string]: any;
    defaulter_provider: string;
    email: string;
    password: string;
    picture_url: string;
    last_login: string;
    last_login_ip: string;
    last_login_location: string;
    login_counts: number;
    created_by: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    epcs_settings: boolean;
    allow_epcs: boolean;
    epcs_approver: boolean;
    verified: boolean;
}
export interface IUserRole {
    [index: string]: any;
    user_id: string;
    entity_id: string;
    practice_id: string;
    practice_location_id: string;
    practice_role_id: number;
    by_default: boolean;
}
export interface IInsertData extends IUser {
    roles?: IUserRole[];
}
export interface IUpdateData extends IUserUpdateData {
    roles?: IUserRole[];
}
