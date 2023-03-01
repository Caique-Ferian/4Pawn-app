import { randomUUID } from 'crypto';
import IPropsPet from './types';

export default class Pet {
  private props: IPropsPet;
  private _id: string;
  constructor(props: IPropsPet, id?: string) {
    this.props = { ...props, adopted: props.adopted ?? false };
    this._id = id ?? randomUUID();
  }
  public get id(): string {
    return this._id;
  }
  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get ageInYears(): number {
    return this.props.ageInYears;
  }

  public set ageInYears(ageInYears: number) {
    this.props.ageInYears = ageInYears;
  }

  public get image(): string {
    return this.props.image;
  }

  public set image(image: string) {
    this.props.image = image;
  }

  public get weightInKg(): number {
    return this.props.weightInKg;
  }

  public set weightInKg(weight: number) {
    this.props.weightInKg = weight;
  }

  public get color(): string {
    return this.props.color;
  }

  public set color(color: string) {
    this.props.color = color;
  }

  public get adopted(): boolean {
    return this.props.adopted;
  }
}
