import toCurrency from '../../../../../shared/utils/toCurrency';
import './CreditCard.css';

interface Props {
  name: string;
  image: string;
  brand: string;
  valueAvaiable: number;
  valueStatement: number;
}

export default function CreditCard(props: Props) {
  const { name, brand, valueAvaiable, valueStatement, image } = props;

  return (
    <div className="creditCard">
      <div className="cardHeader">
        <div className="cardImage">
          <img alt="" src={image} />
        </div>
        <div className="cardName">
          <p>{name}</p>
          <p>{brand}</p>
        </div>
      </div>
      <div className="cardValues">
        <div>
          <p className="cardInfoTitle">Available</p>
          <p className="cardInfoValue">{toCurrency(valueAvaiable)}</p>
        </div>
        <div>
          <p className="cardInfoTitle">Statement</p>
          <p className="cardInfoValue">{toCurrency(valueStatement)}</p>
        </div>
      </div>
    </div>
  );
}
