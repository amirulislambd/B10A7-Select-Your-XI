import logo from '../../assets/logo.png'
import coin from '../../assets/Currency.png'
const Navbar = () => {
  return (
    <div>
      <div className="navbar flex shadow  justify-between max-w-[1200px] mx-auto">
        <div className="flex-none">
          <a className="w-[60px] h-[60px]" href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-1">
          <span>600000000</span>
          <span>
            <img src={coin} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
