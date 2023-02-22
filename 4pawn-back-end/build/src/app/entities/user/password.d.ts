export default class Password {
    private readonly password;
    private regex;
    constructor(password: string);
    get value(): string;
}
