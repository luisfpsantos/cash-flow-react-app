import toCurrency from '../../../../../shared/utils/toCurrency';
import './Account.css';

interface Props {
  name: string;
  image: string;
  balance: number;
}

export default function Account(props: Props) {
  const { name, image, balance } = props;

  return (
    <div className="account">
      <div className="accountImage">
        <img alt="" src={image} />
      </div>
      <div className="accountName">{name}</div>
      <div className="accountValue">{toCurrency(balance)}</div>
    </div>
  );
}
