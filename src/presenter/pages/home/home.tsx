import { useEffect } from 'react';
import axios from 'axios';
import Divider from '../../../shared/components/Divider/Divider';
import Account from './components/Account/Account';
import Card from './components/Card/card';
import CreditCard from './components/CreditCard/CreditCard';
import Header from './components/HomeHeader/HomeHeader';
import ManageButton from './components/ManageButton/ManageButton';
import './index.css';
import HomeRepositoryImpl from '../../../infra/repositories/HomeRepository';
import { HttpClientImpl } from '../../../shared/services/HttpClient';

export default function Home() {
  async function onInit() {
    const http = new HttpClientImpl(axios);
    const repository = new HomeRepositoryImpl(http);
    const result = await repository.getTotalAccounts();
    console.log(result);
  }

  useEffect(() => {
    onInit();
  }, []);

  return (
    <>
      <Header />

      <Card
        isFirst
        content={
          <>
            <p className="lightTitle">Overal balance</p>
            <p className="boldTitle">R$ 4.000,00</p>
            <Divider />
            <p className="lightBoldTitle">My accounts</p>

            <Account
              name="Nubank"
              balance={40000}
              image={
                <img
                  alt=""
                  src="https://nubank.com.br/images/nu-icon.png?v=2"
                />
              }
            />

            <ManageButton
              name="Manage accounts"
              onClick={(e) => {
                e?.preventDefault();
              }}
            />
          </>
        }
      />

      <Card
        content={
          <>
            <p className="lightTitle">All invoices</p>
            <p className="boldTitle">R$ 2.000,00</p>
            <Divider />
            <p className="lightBoldTitle">My cards</p>

            <CreditCard
              name="Cartao Casa"
              brand="XP"
              valueAvaiable={1000}
              valueStatement={400}
              image={
                <img
                  src="https://upload.wikimedia.org/wikipedia/pt/0/0b/XP_Investimentos_logo.png"
                  alt=""
                />
              }
            />

            <ManageButton
              name="Manage Cards"
              onClick={(e) => {
                e?.preventDefault();
              }}
            />
          </>
        }
      />
    </>
  );
}
