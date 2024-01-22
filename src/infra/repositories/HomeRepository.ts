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

  getListAccounts(): Promise<AccountEntity[]> {
    throw new Error("Method not implemented.");
  }

  getTotalCreditCards(): Promise<number> {
    throw new Error("Method not implemented.");
  }

  getListCreditCards(): Promise<CreditCardEntity[]> {
    throw new Error("Method not implemented.");
  }
}