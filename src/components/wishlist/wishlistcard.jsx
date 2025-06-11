import { useDispatch } from "react-redux";
import { bagActions, wishlistActions } from "../../store/mainStore";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BsHeart, BsHandbag } from "react-icons/bs";

const WishCard = ({ item }) => {
  const dispatch = useDispatch();

  // Calculate final price after discount
  const finalPrice =
    item.product.price - (item.product.discount * item.product.price) / 100;

  return (
    <div className="bg-white !rounded-lg !shadow-sm overflow-hidden border border-gray-200 w-full! !sm:w-[calc(50%-1rem)] !md:w-[calc(33.33%-1rem)] !lg:w-[calc(25%-1rem)] flex flex-col hover:!shadow-md">
      {/* Product Image */}
      <div className="relative p-4 bg-gray-50">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-full h-48 object-contain"
        />
        <button
          onClick={() =>
            dispatch(wishlistActions.REMOVE_FROM_WISHLIST(item.UID))
          }
          className="absolute top-2 right-2 p-2 bg-white rounded-full! shadow-sm hover:bg-red-50"
          aria-label="Remove from wishlist"
        >
          <BsHeart className="text-red-500" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-grow">
        <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 h-12">
          {item.product.name}
        </h3>

        <div className="flex items-center mb-2">
          <span className="text-lg font-semibold flex items-center">
            <FaIndianRupeeSign className="text-sm mr-0.5" />
            {finalPrice.toFixed(0)}
          </span>

          {item.product.discount > 0 && (
            <>
              <span className="text-sm text-gray-500 line-through ml-2 flex items-center">
                <FaIndianRupeeSign className="text-xs mr-0.5" />
                {item.product.price}
              </span>
              <span className="ml-2 text-sm text-green-600">
                {item.product.discount}% OFF
              </span>
            </>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 pb-4 mt-auto">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className="py-2 px-3 border border-gray-300 text-gray-700 rounded-md! hover:bg-gray-50 font-medium text-sm flex items-center justify-center"
            onClick={() =>
              dispatch(wishlistActions.REMOVE_FROM_WISHLIST(item.UID))
            }
          >
            <BsHeart className="mr-1" /> Remove
          </button>

          <button
            type="button"
            className="py-2 px-3 bg-purple-600 text-white rounded-md! hover:bg-purple-700 font-medium text-sm flex items-center justify-center"
            onClick={() => {
              dispatch(bagActions.ADD_TO_BAG(item));
              dispatch(wishlistActions.REMOVE_FROM_WISHLIST(item.UID));
            }}
          >
            <BsHandbag className="mr-1" /> Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
