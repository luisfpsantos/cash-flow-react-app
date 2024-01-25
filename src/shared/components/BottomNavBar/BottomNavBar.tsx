import './BottomNavBar.css';

export default function BottomNavbar() {
  return (
    <div className="bottomNavBar">
      <div className="navContent">
        <a href="/" aria-label="a">
          <img alt="" src="../../../src/assets/svg/home-icon.svg" />
        </a>
        <a href="/" aria-label="a">
          <img alt="" src="../../../src/assets/svg/add-icon.svg" />
        </a>
        <a href="/" aria-label="a">
          <img alt="" src="../../../src/assets/svg/transaction-icon.svg" />
        </a>
      </div>
    </div>
  );
}
