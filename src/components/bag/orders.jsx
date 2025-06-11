import { useDispatch, useSelector } from "react-redux";
import Ordercard from "./ordercard";
import { useEffect, useState } from "react";
import { DeleteOrder, serverProducts } from "../../store/fetchstore";
import Loader from "../Home/loader";
import { productActions } from "../../store/mainStore";

const Orders = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.products);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      dispatch(productActions.ORDERCOMPONENT());
      setInitialized(true);
    }
  }, [dispatch, initialized]);
  
  useEffect(() => {
    if (status === "empty") {
      dispatch(serverProducts("orders"));
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader />
      </div>
    );
  }
  
  if (status === "rejected") {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg shadow">
          <h3 className="font-medium text-lg">Error fetching orders</h3>
          <p>Please try again later or contact customer support.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 max-w-6xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Orders</h1>
      
      {list.length ? (
        list.map((order) => (
          <div
            key={order.id}
            className="mb-8 bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Order Header */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-800">
                    Delivering to: <span className="font-bold text-purple-700">{order.n}</span>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {order.hno}, {order.st}, {order.c}, {order.pin} • Near {order.lm} • Ph: {order.no}
                  </p>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded flex items-center gap-1"
                  onClick={() => dispatch(DeleteOrder(order.id))}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Cancel Order
                </button>
              </div>
            </div>
            
            {/* Order Products */}
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-500 mb-3">ORDER ITEMS</h4>
              <div className="flex flex-wrap gap-4">
                {order.products &&
                  order.products.map((item, index) => (
                    <Ordercard item={item} key={index} />
                  ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="bg-white p-10 rounded-lg shadow-md text-center">
          <div className="text-7xl text-gray-300 mb-4">📦</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">No Orders Yet</h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't placed any orders yet.
          </p>
          <a 
            href="/" 
            className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700"
          >
            Start Shopping
          </a>
        </div>
      )}
    </div>
  );
};

export default Orders;
