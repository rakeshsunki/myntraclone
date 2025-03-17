import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-40`}
      >
        <span className="absolute top-5 right-10">
          <RxCross2 onClick={() => setIsOpen(false)} />
        </span>
        {/* Sidebar Content */}
        <div className="flex flex-col items-center gap-6 py-6">
          {/* Profile */}
          <div className="flex flex-col items-center text-sm font-bold hover:border-b-4 hover:border-black cursor-pointer">
            <IoPersonOutline size={24} />
            <span>Profile</span>
          </div>

          {/* Wishlist */}
          <Link
            to={"/wishlist"}
            className="flex flex-col items-center text-sm text-black font-bold hover:border-b-4 hover:border-black"
          >
            <CiHeart size={24} />
            <span>Wishlist</span>
          </Link>

          {/* Bag */}
          <Link
            to={"/bag"}
            className="flex flex-col items-center text-sm text-black font-bold hover:border-b-4 hover:border-black"
          >
            <SlHandbag size={24} />
            <span>Bag</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
