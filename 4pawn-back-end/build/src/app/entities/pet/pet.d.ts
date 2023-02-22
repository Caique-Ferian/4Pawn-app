import IPropsPet from './types';
export default class Pet {
    private props;
    private _id;
    constructor(props: IPropsPet, id?: string, adopted?: boolean);
    get id(): string;
    get name(): string;
    set name(name: string);
    get age(): number;
    set age(age: number);
    get image(): string;
    set image(image: string);
    get weight(): number;
    set weight(weight: number);
    get color(): string;
    set color(color: string);
    get adopted(): boolean;
}
