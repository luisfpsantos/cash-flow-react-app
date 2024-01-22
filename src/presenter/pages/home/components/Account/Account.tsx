import './Account.css';

interface Props {
  name: string;
  image: JSX.Element;
  balance: number;
}

export default function Account(props: Props) {
  const { name, image, balance } = props;

  return (
    <div className="account">
      <div className="accountImage">{image}</div>
      <div className="accountName">{name}</div>
      <div className="accountValue">{balance}</div>
    </div>
  );
}
