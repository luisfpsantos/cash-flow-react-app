import './HomeHeader.css';

export default function HomeHeader() {
  return (
    <div className="homeHeader">
      <div className="person">
        <div className="imagePerson">
          <img
            src="https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg"
            alt=""
          />
        </div>
        <div className="personName">
          <p>Good evening,</p>
          <p>Luis Fernando</p>
        </div>
      </div>
    </div>
  );
}
