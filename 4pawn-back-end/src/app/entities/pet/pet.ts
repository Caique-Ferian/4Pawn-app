import { randomUUID } from 'crypto';
import IPropsPet from './types';

export default class Pet {
  private props: IPropsPet;
  private _id: string;
  constructor(props: IPropsPet, id?: string, adopted?: boolean) {
    this.props = { ...props, adopted: adopted ?? false };
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

  public get age(): number {
    return this.props.age;
  }

  public set age(age: number) {
    this.props.age = age;
  }

  public get image(): string {
    return this.props.image;
  }

  public set image(image: string) {
    this.props.image = image;
  }

  public get weight(): number {
    return this.props.weight;
  }

  public set weight(weight: number) {
    this.props.weight = weight;
  }

  public get color(): string {
    return this.props.color;
  }

  public set color(color: string) {
    this.props.color = color;
  }
}
