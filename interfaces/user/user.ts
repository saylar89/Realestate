export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  age: number | string;
  email: string;
  phone: string;
  password: string;
  gender?: string;
  birthDate?: Date | null;
}
