export default class AccountEntity {
  readonly name: string;

  readonly balance: number;

  readonly image: string;

  constructor(name: string, balance: number, image: string) {
    if (typeof name !== 'string' || typeof balance !== 'number' || typeof image !== 'string') {
      throw new Error()
    }

    this.name = name;
    this.balance = balance;
    this.image = image;
  }
}