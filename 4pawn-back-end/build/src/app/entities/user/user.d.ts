import IPropsUser from './types';
import Email from './email';
import Password from './password';
export default class User {
    private props;
    private _id;
    constructor(props: IPropsUser, id?: string);
    get id(): string;
    get fullName(): string;
    set fullName(fullName: string);
    get username(): string;
    set username(username: string);
    get email(): Email;
    set email(email: Email);
    get password(): Password;
    set password(password: Password);
    get role(): string;
}
