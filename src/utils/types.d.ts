// export enum UpdateMode {
//     default = '', editUser = 'editUser', changePassword = 'changePassword'
// }

export interface UserRegister {
    login: string,
    password: string,
    firstName: string,
    lastName: string,
    number: string,
    email: string
}

export interface UserProfile {
    login: string,
    roles: string[],
    firstName: string,
    lastName: string
}

