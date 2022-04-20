export interface IUser {
    id:number;
    firstName?: string;
    lastName: string;
    age?: number;
    phone: string;
    email: string;
    password: string;
}
export interface ILogin {
    email: string;
    password: string;
}