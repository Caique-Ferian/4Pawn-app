import IPropsUser from './types';
import Email from './email';
import Password from './password';
import { randomUUID } from 'crypto';

export default class User {
  private props: IPropsUser;
  private _id: string;
  constructor(props: IPropsUser, id?: string, role?: string) {
    this.props = { ...props, role: role ?? 'user' };
    this._id = id ?? randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public get fullName(): string {
    return this.props.fullName;
  }

  public set fullName(fullName: string) {
    this.props.fullName = fullName;
  }

  public get username(): string {
    return this.props.username;
  }

  public set username(username: string) {
    this.props.username = username;
  }

  public get email(): Email {
    return this.props.email;
  }

  public set email(email: Email) {
    this.props.email = email;
  }

  public get password(): Password {
    return this.props.password;
  }

  public set password(password: Password) {
    this.props.password = password;
  }
}
