import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishCard from "./wishlistcard";
import { bagActions, wishlistActions } from "../../store/mainStore";
import { BsHandbag, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const WishList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  return (
    <div className="mt-16 min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Wishlist Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Wishlist</h1>
          {wishlist.length > 0 && (
            <button
              className="flex items-center px-4 py-2 bg-purple-600 text-white font-medium !rounded-md hover:bg-purple-700 text-sm"
              onClick={() => {
                dispatch(bagActions.WISHADD(wishlist));
                dispatch(wishlistActions.EMPTY());
                navigate("/bag");
              }}
            >
              <BsHandbag className="mr-2" />
              Move All to Bag
            </button>
          )}
        </div>

        {/* Wishlist Content */}
        {wishlist.length === 0 ? (
          <div className="bg-white !rounded-lg shadow-sm p-10 text-center">
            <div className="flex justify-center mb-4">
              <BsHeart className="text-6xl text-gray-300" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Save items you love by clicking the heart icon on product pages.
              All your favorites will appear here.
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-purple-600 text-white font-medium !rounded-md hover:bg-purple-700"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4 bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  {wishlist.length}
                </span>{" "}
                {wishlist.length === 1 ? "item" : "items"} in your wishlist
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {wishlist.map((item, index) => (
                <WishCard item={item} key={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishList;
