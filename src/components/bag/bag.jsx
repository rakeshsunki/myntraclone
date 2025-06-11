import { useDispatch, useSelector } from "react-redux";
import BagCard from "./bagcard";
import { Link, useNavigate } from "react-router-dom";
import Orders from "./orders";
import { useState } from "react";
import { serverProducts } from "../../store/fetchstore";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Bag = () => {
  const { baglist } = useSelector((state) => state.bag);
  const [isChoosen, setChoosen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total items and price
  const totalItems = baglist.reduce(
    (total, item) => total + parseInt(item.Quantity),
    0
  );
  const totalPrice = baglist.reduce((total, item) => {
    const price =
      item.product.price - (item.product.discount * item.product.price) / 100;
    return total + price * item.Quantity;
  }, 0);

  return (
    <div className="mt-16 min-h-screen bg-gray-50 px-4 py-6">
      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex border-b">
            <button
              className={`py-3 px-5 font-medium text-sm ${
                !isChoosen
                  ? "text-purple-700 border-b-2 border-purple-700"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setChoosen(false)}
            >
              Shopping Bag ({baglist.length})
            </button>
            <button
              className={`py-3 px-5 font-medium text-sm ${
                isChoosen
                  ? "text-purple-700 border-b-2 border-purple-700"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => {
                setChoosen(true);
                dispatch(serverProducts("orders"));
              }}
            >
              Your Orders
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      {isChoosen ? (
        <Orders />
      ) : baglist.length === 0 ? (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="text-7xl text-gray-300 mb-4">🛍️</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Your bag is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added anything to your bag yet.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 inline-block"
            onClick={() => dispatch(serverProducts("products"))}
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Bag Items */}
            <div className="w-full lg:w-2/3">
              {baglist.map((item, index) => (
                <BagCard key={index} item={item} />
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4 pb-3 border-b">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Items ({totalItems})</span>
                    <span className="font-medium flex items-center">
                      <FaIndianRupeeSign className="text-xs mr-0.5" />
                      {totalPrice.toFixed(0)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                </div>

                <div className="flex justify-between font-semibold text-lg pt-3 border-t">
                  <span>Total Amount</span>
                  <span className="flex items-center">
                    <FaIndianRupeeSign className="text-sm mr-0.5" />
                    {totalPrice.toFixed(0)}
                  </span>
                </div>

                <button
                  className="w-full mt-6 py-3 bg-purple-600 text-white font-medium rounded hover:bg-purple-700 transition-colors"
                  onClick={() => navigate("/orderform")}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bag;
