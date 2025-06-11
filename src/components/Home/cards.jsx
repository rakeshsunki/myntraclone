import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bagActions, wishlistActions } from "../../store/mainStore";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { IoIosHeart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const Cards = ({ product }) => {
  const [heart, setHeart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [notification, setNotification] = useState({ show: false, type: null });

  // Calculate final price after discount
  const finalPrice = product.price - (product.discount * product.price) / 100;

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(
        () => setNotification({ ...notification, show: false }),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const showNotification = (type) => {
    setNotification({ show: true, type });
  };

  const handleAddToBag = () => {
    const UID = crypto.randomUUID();
    dispatch(bagActions.ADD_TO_BAG({ product, UID, Quantity: quantity }));
    showNotification("bag");
  };

  const handleToggleWishlist = () => {
    const UID = crypto.randomUUID();
    if (!heart) {
      dispatch(wishlistActions.ADD_TO_WISHLIST({ product, UID, Quantity: 1 }));
      showNotification("wishlist");
    } else {
      dispatch(wishlistActions.HEARTREMOVE(product.id));
    }
    setHeart(!heart);
  };

  return (
    <>
      {/* Notification */}
      <div
        className={`fixed top-20 right-4 z-40 transition-all transform duration-500 ${
          notification.show
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="bg-white rounded-lg! shadow-lg border border-gray-200 p-4 max-w-xs">
          <div className="flex items-center">
            {notification.type === "wishlist" ? (
              <>
                <div className="w-10 h-10 rounded-full! bg-pink-100 flex items-center justify-center mr-3">
                  <IoIosHeart className="text-pink-600 text-xl" />
                </div>
                <p className="text-gray-800">Added to your wishlist</p>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full! bg-green-100 flex items-center justify-center mr-3">
                  <BsHandbag className="text-green-600 text-xl" />
                </div>
                <p className="text-gray-800">Added to your bag</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-white rounded-lg! overflow-hidden shadow-md hover:shadow-xl! transition-shadow!">
        {/* Product Image */}
        <div className="relative h-64 bg-gray-50 p-4 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
          <button
            onClick={handleToggleWishlist}
            className={`absolute top-2 right-2 w-8 h-8 rounded-full! flex items-center justify-center transition-colors ${
              heart ? "bg-pink-100" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {heart ? (
              <IoIosHeart className="text-pink-600 text-xl" />
            ) : (
              <FaRegHeart className="text-gray-600" />
            )}
          </button>
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h3 className="font-medium text-gray-800 mb-1 line-clamp-2 h-12">
            {product.name}
          </h3>

          <div className="flex items-center mb-3">
            <span className="text-lg font-semibold flex items-center">
              <FaIndianRupeeSign className="text-sm mr-0.5" />
              {finalPrice.toFixed(0)}
            </span>

            {product.discount > 0 && (
              <>
                <span className="text-sm text-gray-500 line-through ml-2 flex items-center">
                  <FaIndianRupeeSign className="text-xs mr-0.5" />
                  {product.price}
                </span>
                <span className="ml-2 text-xs text-green-600 font-medium">
                  ({product.discount}% OFF)
                </span>
              </>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="flex justify-between items-center mb-4">
            <label className="text-sm text-gray-600">Quantity:</label>
            <div className="flex items-center">
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-l-md! border border-gray-300"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300 bg-white">
                {quantity}
              </span>
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-r-md! border border-gray-300"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={handleAddToBag}
            className="w-full py-2 bg-purple-600 text-white rounded-md! hover:bg-purple-700 flex items-center justify-center font-medium"
          >
            <BsHandbag className="mr-2" /> Add to Bag
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
