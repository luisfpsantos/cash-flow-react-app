import './card.css';

interface Props {
  content: JSX.Element;
  isFirst?: boolean;
}

export default function Card(props: Props) {
  const { content, isFirst } = props;

  return <div className={`card ${isFirst && 'first'}`}>{content}</div>;
}

Card.defaultProps = {
  isFirst: false,
};
