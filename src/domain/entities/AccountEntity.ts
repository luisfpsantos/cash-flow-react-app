export default class AccountEntity {
  readonly name: string;

  readonly balance: number;

  readonly image: string;

  constructor(name: string, balance: number, image: string) {
    this.name = name;
    this.balance = balance;
    this.image = image;
  }
}