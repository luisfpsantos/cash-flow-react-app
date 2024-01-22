import { SyntheticEvent } from 'react';
import './ManageButton.css';

interface Props {
  onClick: (e?: SyntheticEvent) => void;
  name: string;
}

export default function ManageButton(props: Props) {
  const { onClick, name } = props;

  return (
    <button className="manageButton" type="submit" onClick={onClick}>
      {name}
    </button>
  );
}
