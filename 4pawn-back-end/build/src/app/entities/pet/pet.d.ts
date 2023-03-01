import IPropsPet from './types';
export default class Pet {
    private props;
    private _id;
    constructor(props: IPropsPet, id?: string);
    get id(): string;
    get name(): string;
    set name(name: string);
    get ageInYears(): number;
    set ageInYears(ageInYears: number);
    get image(): string;
    set image(image: string);
    get weightInKg(): number;
    set weightInKg(weight: number);
    get color(): string;
    set color(color: string);
    get adopted(): boolean;
}
