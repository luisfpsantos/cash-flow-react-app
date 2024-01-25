import { useEffect, useState } from 'react';
import axios from 'axios';
import Divider from '../../../shared/components/Divider/Divider';
import Account from './components/Account/Account';
import Card from './components/Card/card';
import CreditCard from './components/CreditCard/CreditCard';
import Header from './components/HomeHeader/HomeHeader';
import ManageButton from './components/ManageButton/ManageButton';
import './index.css';
import HomeRepositoryImpl from '../../../infra/repositories/HomeRepositoryImpl';
import { HttpClientImpl } from '../../../shared/services/HttpClient';
import AccountEntity from '../../../domain/entities/AccountEntity';
import CreditCardEntity from '../../../domain/entities/CreditCardEntity';
import toCurrency from '../../../shared/utils/toCurrency';
import buildListSeparated from '../../../shared/utils/buildListSeparated';
import BottomNavbar from '../../../shared/components/BottomNavBar/BottomNavBar';

export default function Home() {
  const [overalBalance, setOveralBalance] = useState(0);
  const [accounts, setAccounts] = useState<AccountEntity[]>([]);
  const [totalCreditCards, setTotalCreditCards] = useState(0);
  const [creditCards, setCreditCards] = useState<CreditCardEntity[]>([]);

  async function onInit() {
    const http = new HttpClientImpl(axios);
    const repository = new HomeRepositoryImpl(http);

    const result = await Promise.all([
      repository.getTotalAccounts(),
      repository.getTotalCreditCards(),
      repository.getListAccounts(),
      repository.getListCreditCards(),
    ]);

    setOveralBalance(result[0] instanceof Error ? 0 : result[0]);
    setTotalCreditCards(result[1] instanceof Error ? 0 : result[1]);
    setAccounts(result[2] instanceof Error ? [] : result[2]);
    setCreditCards(result[3] instanceof Error ? [] : result[3]);
  }

  useEffect(() => {
    onInit();
  }, []);

  return (
    <>
      <Header />

      <Card isFirst>
        <p className="lightTitle">Overal balance</p>
        <p className="boldTitle">{toCurrency(overalBalance)}</p>
        <Divider />
        <p className="lightBoldTitle">My accounts</p>

        {buildListSeparated(accounts, <Divider />, (account) => (
          <Account
            balance={account.balance}
            image={account.image}
            name={account.name}
          />
        ))}

        <ManageButton
          name="Manage accounts"
          onClick={(e) => {
            e?.preventDefault();
          }}
        />
      </Card>

      <Card>
        <p className="lightTitle">All invoices</p>
        <p className="boldTitle">{toCurrency(totalCreditCards)}</p>
        <Divider />
        <p className="lightBoldTitle">My cards</p>

        {buildListSeparated(creditCards, <Divider />, (creditCard) => (
          <CreditCard
            brand={creditCard.brand}
            image={creditCard.image}
            name={creditCard.name}
            valueAvaiable={creditCard.valueAvailable}
            valueStatement={creditCard.valueStatement}
          />
        ))}

        <ManageButton
          name="Manage Cards"
          onClick={(e) => {
            e?.preventDefault();
          }}
        />
      </Card>

      <BottomNavbar />
    </>
  );
}
