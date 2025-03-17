import { FaIndianRupeeSign, FaRegHeart } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { bagActions, wishlistActions } from "../../store/mainStore";
import { useEffect, useState } from "react";
import { BsHandbag } from "react-icons/bs";
const Cards = ({ product }) => {
  const [heart, setheart] = useState(false);
  const [Quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [BagNotification, setBagnotification] = useState(false);

  useEffect(() => {
    if (heart) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 3000);
      return () => clearTimeout(timer);
    }
    if (BagNotification) {
      setBagnotification(true);
      const timer = setTimeout(() => setBagnotification(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [heart, BagNotification]);
  return (
    <>
      <span
        className={`fixed top-[15%] right-[5%] !rounded-[10px] border bg-orange-200 w-[100px] z-40 h-[50px] md:w-[300px] md:h-[100px] flex items-center justify-center text-sm transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Added To Wishlist, Check Wishlist <FaRegHeart className="inline" />
      </span>
      <span
        className={`fixed top-[15%] right-[5%] !rounded-[10px] border bg-orange-200 w-[100px] z-40 h-[50px] md:w-[300px] md:h-[100px] flex items-center justify-center text-sm transition-opacity duration-500 ${
          BagNotification ? "opacity-100" : "opacity-0"
        }`}
      >
        Added To BagList, Check Baglist <BsHandbag className="inline" />
      </span>
      <div className="h-[400px] w-[250px] m-4 shadow-[10px_10px_10px_gray] bg-white">
        <div className="w-full h-[70%] flex justify-center items-center">
          <img src={product.image} className="h-[90%] w-fit"></img>
        </div>
        <div className="flex justify-between items-center px-2">
          <h5>{product.name} </h5>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-light !bg-amber-100"
              onClick={() => setQuantity(Quantity + 1)}
            >
              +
            </button>
            <span type="button" className="btn btn-light content-center">
              {Quantity}
            </span>
            <button
              type="button"
              className="btn btn-light !bg-amber-100"
              onClick={() => Quantity != 0 && setQuantity(Quantity - 1)}
            >
              -
            </button>
          </div>
        </div>

        <div className="h-[20%] flex items-center justify-evenly">
          <span>
            <b>
              Price : <FaIndianRupeeSign className="inline" />
              {product.price}
            </b>
          </span>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              if (Quantity !== 0) {
                let UID = crypto.randomUUID();
                dispatch(bagActions.ADD_TO_BAG({ product, UID, Quantity }));
                setBagnotification(true);
              } else {
                alert("Please Select Quantity Required");
              }
            }}
          >
            Add to Bag
          </button>
          <span
            className="active:text-xl active:bg-red"
            onClick={() => {
              let UID = crypto.randomUUID();
              if (!heart) {
                dispatch(
                  wishlistActions.ADD_TO_WISHLIST({ product, UID, Quantity: 1 })
                );
                setheart(!heart);
              } else {
                dispatch(wishlistActions.HEARTREMOVE(product.id));
                setheart(!heart);
              }
            }}
          >
            {heart ? <IoIosHeart /> : <FaRegHeart />}
          </span>
        </div>
      </div>
    </>
  );
};
export default Cards;
