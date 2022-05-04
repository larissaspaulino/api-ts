export interface IUser {
    id: string;
    nome: string;
    email: string;
    password?: string;
}

export interface UserPostRequest {
    nome: string;
    email: string;
    password: string;
}
