import { useDispatch } from "react-redux";
import { bagActions, wishlistActions } from "../../store/mainStore";
import { FaIndianRupeeSign } from "react-icons/fa6";

const WishCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-fit h-fit m-4 p-8 text-sm md:justify-around md:flex shadow-[10px_10px_10px_gray] !bg-[rgb(191,169,243)]">
      <div className="h-fit w-full md:h-[300px] md:w-[200px] justify-items-center p-4 shadow-[10px_10px_10px_gray] bg-white">
        <img src={item.product.image} className="h-[90%]" />
        <h5>{item.product.name}</h5>
      </div>
      <div className="h-fit w-fit m-4 justify-start items-center">
        <ul className="list-none">
          <li>
            <pre>
              <b>Product Name :</b>
              {item.product.name}
            </pre>
          </li>
          <li>
            <pre>
              <b>product Price :</b>
              <FaIndianRupeeSign className="inline" />
              {item.product.price}
            </pre>
          </li>
          <li>
            <pre>
              <b>Discount Offered :</b>
              {item.product.discount} %
            </pre>
          </li>
          <li>
            <pre>
              <b>Final Amount :</b>
              <FaIndianRupeeSign className="inline" />
              {item.product.price -
                (item.product.discount * item.product.price) / 100}
            </pre>
          </li>
        </ul>
        <div className="h-[20%] text-[0.65rem] md:text-sm ">
          <button
            type="button"
            className="btn btn-danger !text-[0.6rem] "
            onClick={() => {
              dispatch(wishlistActions.REMOVE_FROM_WISHLIST(item.UID));
            }}
          >
            Remove From Wishlist
          </button>
          <button
            type="button"
            className="btn btn-success !ml-2 !text-[0.6rem]"
            onClick={() => {
              dispatch(bagActions.ADD_TO_BAG(item));
              dispatch(wishlistActions.REMOVE_FROM_WISHLIST(item.UID));
            }}
          >
            Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
};
export default WishCard;
