import './CreditCard.css';

interface Props {
  name: string;
  image: JSX.Element;
  brand: string;
  valueAvaiable: number;
  valueStatement: number;
}

export default function CreditCard(props: Props) {
  const { name, brand, valueAvaiable, valueStatement, image } = props;

  return (
    <div className="creditCard">
      <div className="cardHeader">
        <div className="cardImage">{image}</div>
        <div className="cardName">
          <p>{name}</p>
          <p>{brand}</p>
        </div>
      </div>
      <div className="cardValues">
        <div>
          <p className="cardInfoTitle">Available</p>
          <p className="cardInfoValue">{valueAvaiable}</p>
        </div>
        <div>
          <p className="cardInfoTitle">Statement</p>
          <p className="cardInfoValue">{valueStatement}</p>
        </div>
      </div>
    </div>
  );
}
