import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { serverProducts } from "../../store/fetchstore";
const Headerright = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-full !justify-evenly items-center w-1/2 hidden md:flex">
      <div className="w-1/2 h-[45%] flex justify-around items-center border !rounded-[2px]">
        <div>
          <IoIosSearch size={20} className="inline" />
        </div>
        <input
          className="w-[80%] h-[90%] border-none"
          placeholder="Search For Products,brands and more"
        ></input>
      </div>
      <div
        className="h-full justify-items-center content-center text-sm font-bold !font-['Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif] hover:border-b-4 hover:border-black"
        onClick={() => alert("Feature will be Avaliable soon")}
      >
        <IoPersonOutline size={18} className="inline" />
        <span>Profile</span>
      </div>
      <Link
        to={"/wishlist"}
        className="h-full justify-items-center content-center text-sm !no-underline text-black font-[Franklin_Gothic_Medium,_Arial_Narrow,_Arial,_sans-serif]"
      >
        <CiHeart size={18} className="inline" />
        <span>Wishlist</span>
      </Link>
      <Link
        to={"/bag"}
        onClick={() => dispatch(serverProducts("orders"))}
        className="h-full justify-items-center content-center text-sm !no-underline text-black font-[Franklin_Gothic_Medium,_Arial_Narrow,_Arial,_sans-serif]"
      >
        <SlHandbag size={18} className="inline" />
        <span>Bag</span>
      </Link>
    </div>
  );
};
export default Headerright;
