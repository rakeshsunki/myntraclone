import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { serverProducts } from "../../store/fetchstore";
import { FaBars } from "react-icons/fa6";
import { headerActions } from "../../store/mainStore";
const Headerleft = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  return (
    <div className="h-full w-full flex justify-evenly text-xs md:text-sm items-center md:w-1/2">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-md md:hidden"
      >
        <FaBars />
      </button>
      <Link to={"/"}>
        <img
          src="./myntralogo.png"
          className="h-[35px] w-[50px] bg-cover"
          onClick={() => dispatch(serverProducts("products"))}
        ></img>
      </Link>
      <Link
        to={"/"}
        className="h-full flex justify-center items-center !no-underline text-black font-[Franklin_Gothic_Medium,_Arial_Narrow,_Arial,_sans-serif] hover:border-b-4 hover:border-black"
        onMouseOver={() => dispatch(headerActions.MEN())}
        onClick={() => dispatch(serverProducts("men"))}
        onMouseLeave={() => dispatch(headerActions.CLEAR())}
      >
        MEN
      </Link>
      <Link
        to={"/"}
        className="h-full flex justify-center items-center !no-underline text-black font-[Franklin_Gothic_Medium,_Arial_Narrow,_Arial,_sans-serif] hover:border-b-4 hover:border-black"
        onMouseOver={() => dispatch(headerActions.WOMEN())}
        onClick={() => dispatch(serverProducts("women"))}
        onMouseLeave={() => dispatch(headerActions.CLEAR())}
      >
        WOMEN
      </Link>
      <Link
        to={"/"}
        className="h-full flex justify-center items-center !no-underline text-black font-[Franklin_Gothic_Medium,_Arial_Narrow,_Arial,_sans-serif] hover:border-b-4 hover:border-black"
        onMouseOver={() => dispatch(headerActions.KIDS())}
        onClick={() => dispatch(serverProducts("kids"))}
        onMouseLeave={() => dispatch(headerActions.CLEAR())}
      >
        KIDS
      </Link>
      <Link
        to={"/"}
        className="h-full flex justify-center items-center !no-underline text-black font-[Franklin_Gothic_Medium,_Arial_Narrow,_Arial,_sans-serif] hover:border-b-4 hover:border-black"
        onMouseOver={() => dispatch(headerActions.HOME_lIVING())}
        onClick={() => dispatch(serverProducts("home"))}
        onMouseLeave={() => dispatch(headerActions.CLEAR())}
      >
        HOME & LIVING
      </Link>
      <Link
        to={"/"}
        className="h-full flex justify-center items-center !no-underline text-black font-[Franklin_Gothic_Medium,_Arial_Narrow,_Arial,_sans-serif] hover:border-b-4 hover:border-black"
        onMouseOver={() => dispatch(headerActions.BEAUTY())}
        onClick={() => dispatch(serverProducts("Beauty"))}
        onMouseLeave={() => dispatch(headerActions.CLEAR())}
      >
        BEAUTY
      </Link>
      <div
        className="h-full flex justify-center items-center !no-underline text-black font-[Franklin_Gothic_Medium,_Arial_Narrow,_Arial,_sans-serif] hover:border-b-4 hover:border-black"
        onClick={() => alert("Feature will be Avaliable soon")}
      >
        STUDIO
      </div>
    </div>
  );
};
export default Headerleft;
