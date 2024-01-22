import AccountEntity from "../entities/AccountEntity"
import CreditCardEntity from "../entities/CreditCardEntity"

export interface HomeRepository {
  getTotalAccounts(): Promise<number | Error>
  getListAccounts(): Promise<AccountEntity[] | Error>
  getTotalCreditCards(): Promise<number | Error>
  getListCreditCards(): Promise<CreditCardEntity[] | Error>
}