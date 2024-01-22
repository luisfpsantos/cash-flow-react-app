export default class CreditCardEntity {
  readonly name: string;

  readonly brand: string;

  readonly valueAvailable: number;

  readonly valueStatement: number;

  readonly image: string

  constructor(name: string, brand: string, valueAvailable: number, valueStatement: number, image: string) {
    this.name = name;
    this.brand = brand;
    this.valueAvailable = valueAvailable;
    this.valueStatement = valueStatement;
    this.image = image;
  }
}