/* eslint-disable class-methods-use-this */
import AccountEntity from "../../domain/entities/AccountEntity";
import CreditCardEntity from "../../domain/entities/CreditCardEntity";
import { HomeRepository } from "../../domain/repositories/HomeRepository";
import { HttpClient } from "../../shared/services/HttpClient";

export default class HomeRepositoryImpl implements HomeRepository {
  constructor(private readonly httpClient: HttpClient) { }

  async getTotalAccounts(): Promise<number | Error> {
    try {
      const response = JSON.stringify({
        total: 1234.50
      })

      const result = JSON.parse(response).total

      return result

    } catch (err) {
      if (HttpClient.isHttpClientError(err)) {
        return new Error(`Erro na requisição: ${err.message}`)
      }

      return new Error('Erro desconhecido')
    }
  }


  async getListAccounts(): Promise<AccountEntity[] | Error> {
    try {
      const response = JSON.stringify(
        [
          {
            name: 'Nubank',
            balance: 4523.23,
            image: 'https://nubank.com.br/images/nu-icon.png?v=2'
          }, {
            name: 'Inter',
            balance: 1000,
            image: 'https://www.mobills.com.br/blog/wp-content/uploads/2022/04/Banco-Inter.webp'
          },
        ]
      )

      const result = JSON.parse(response) as Array<any>
      const accounts = result.map<AccountEntity>((e) => new AccountEntity(e.name, e.balance, e.image));
      return accounts;

    } catch (err) {
      if (HttpClient.isHttpClientError(err)) {
        return new Error(`Erro na requisição: ${err.message}`)
      }

      return new Error('Erro desconhecido')
    }
  }


  async getTotalCreditCards(): Promise<number | Error> {
    try {
      const response = JSON.stringify({
        total: 2345.5
      })

      const result = JSON.parse(response).total
      return result

    } catch (err) {
      if (HttpClient.isHttpClientError(err)) {
        return new Error(`Erro na requisição: ${err.message}`)
      }

      return new Error('Erro desconhecido')
    }
  }


  async getListCreditCards(): Promise<CreditCardEntity[] | Error> {
    try {
      const response = JSON.stringify(
        [
          {
            name: 'Cartão casa',
            brand: 'Nubank',
            valueAvailable: 2334,
            valueStatement: 1244,
            image: 'https://nubank.com.br/images/nu-icon.png?v=2'
          },
          {
            name: 'Cartão mercado',
            brand: 'Xp',
            valueAvailable: 3442,
            valueStatement: 344,
            image: 'https://upload.wikimedia.org/wikipedia/pt/0/0b/XP_Investimentos_logo.png'
          },
        ]
      )

      const result = JSON.parse(response) as Array<any>
      const accounts = result.map<CreditCardEntity>((e) => new CreditCardEntity(e.name, e.brand, e.valueAvailable, e.valueStatement, e.image));
      return accounts;

    } catch (err) {
      if (HttpClient.isHttpClientError(err)) {
        return new Error(`Erro na requisição: ${err.message}`)
      }

      return new Error('Erro desconhecido')
    }
  }
}