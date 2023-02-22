export default class Email {
    private readonly email;
    private regex;
    constructor(email: string);
    get value(): string;
}
