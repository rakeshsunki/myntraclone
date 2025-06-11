import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { serverProducts } from "../../store/fetchstore";
import { FaBars } from "react-icons/fa6";
import { headerActions } from "../../store/mainStore";

const Headerleft = ({ setIsOpen }) => {
  const dispatch = useDispatch();

  const navItems = [
    { label: "MEN", action: "MEN", param: "men" },
    { label: "WOMEN", action: "WOMEN", param: "women" },
    { label: "KIDS", action: "KIDS", param: "kids" },
    { label: "HOME & LIVING", action: "HOME_living", param: "home" },
    { label: "BEAUTY", action: "BEAUTY", param: "Beauty" },
  ];

  return (
    <div className="h-full w-full flex justify-evenly text-sm gap-1.5 md:text-sm items-center md:w-1/2">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 !rounded-md md:hidden"
      >
        <FaBars />
      </button>

      <Link to={"/"}>
        <img
          src="./myntralogo.png"
          className="h-[35px] w-[50px] object-contain"
          onClick={() => dispatch(serverProducts("products"))}
          alt="Myntra Logo"
        />
      </Link>

      {navItems.map((item) => (
        <Link
          key={item.label}
          to={"/"}
          className="h-full flex justify-center items-center !no-underline text-black font-medium hover:border-b-4 hover:border-pink-500 transition-all px-1"
          onMouseOver={() => dispatch(headerActions[item.action]())}
          onClick={() => dispatch(serverProducts(item.param))}
          onMouseLeave={() => dispatch(headerActions.CLEAR())}
        >
          {item.label}
        </Link>
      ))}

      <div
        className="h-full hidden md:flex justify-center items-center no-underline text-black font-medium hover:border-b-4 hover:border-pink-500 transition-all px-1"
        onClick={() => alert("Feature will be Available soon")}
      >
        STUDIO
      </div>
    </div>
  );
};

export default Headerleft;
