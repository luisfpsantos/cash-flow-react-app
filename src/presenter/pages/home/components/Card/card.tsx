import './card.css';

interface Props {
  children: JSX.Element[];
  isFirst?: boolean;
}

export default function Card(props: Props) {
  const { children, isFirst } = props;

  return <div className={`card ${isFirst && 'first'}`}>{children}</div>;
}

Card.defaultProps = {
  isFirst: false,
};
