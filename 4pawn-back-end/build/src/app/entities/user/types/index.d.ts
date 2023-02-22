import Email from '../email';
import Password from '../password';
export default interface IPropsUser {
    fullName: string;
    username: string;
    role?: string;
    password: Password;
    email: Email;
}
