import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { serverProducts } from "../../store/fetchstore";

const Headerright = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const { baglist } = useSelector((state) => state.bag);

  return (
    <div className="h-full w-1/2 hidden md:flex items-center justify-evenly">
      {/* Existing Search Bar - Keep as is */}
      <div className="w-1/2 h-[45%] flex justify-around items-center border !rounded-sm">
        <div>
          <IoIosSearch size={20} />
        </div>
        <input
          className="w-[80%] h-[90%] border-none outline-none text-sm"
          placeholder="Search For Products,brands and more"
        />
      </div>

      {/* Navigation Items */}
      <NavItem
        icon={<IoPersonOutline size={18} />}
        label="Profile"
        onClick={() => alert("Feature will be Available soon")}
      />

      <NavItem
        icon={<CiHeart size={18} />}
        label="Wishlist"
        to="/wishlist"
        count={wishlist?.length}
      />

      <NavItem
        icon={<SlHandbag size={18} />}
        label="Bag"
        to="/bag"
        count={baglist?.length}
        onClick={() => dispatch(serverProducts("orders"))}
      />
    </div>
  );
};

// Reusable Navigation Item Component
const NavItem = ({ icon, label, to, count, onClick }) => {
  const content = (
    <div className="flex flex-col items-center">
      <div className="relative">
        {icon}
        {count > 0 && (
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500 text-white text-[10px] flex items-center justify-center !rounded-full">
            {count}
          </span>
        )}
      </div>
      <span className="mt-0.5 text-xs font-medium">{label}</span>
    </div>
  );

  const classes =
    "h-full flex flex-col !no-underline justify-center items-center hover:border-b-4 hover:border-pink-500 transition-all px-2";

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

export default Headerright;
