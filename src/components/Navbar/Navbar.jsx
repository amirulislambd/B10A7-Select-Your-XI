import logo from '../../assets/logo.png'
import coin from '../../assets/Currency.png'
const Navbar = ({coins}) => {
  return (
    <div>
      <div className="navbar flex shadow  justify-between container mx-auto">
        <div className="flex-none">
          <a className="w-[60px] h-[60px]" href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-1 font-bold text-xl">
          <span>{coins}</span>
          <span>
            <img src={coin} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
