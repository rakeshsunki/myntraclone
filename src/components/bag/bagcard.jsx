import { useDispatch } from "react-redux";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { bagActions } from "../../store/mainStore";

const BagCard = ({ item }) => {
  const dispatch = useDispatch();
  
  // Calculate final price after discount
  const finalPrice = item.product.price - 
    (item.product.discount * item.product.price) / 100;
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 w-full max-w-2xl mx-auto mb-4">
      <div className="flex flex-col sm:flex-row">
        {/* Product Image */}
        <div className="sm:w-1/3 p-4 flex items-center justify-center bg-gray-50">
          <img 
            src={item.product.image}
            alt={item.product.name}
            className="max-h-48 object-contain" 
          />
        </div>
        
        {/* Product Details */}
        <div className="sm:w-2/3 p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-gray-800">
              {item.product.name}
            </h3>
            <button
              type="button"
              className="p-1 text-gray-400 hover:text-red-500"
              onClick={() => dispatch(bagActions.REMOVE_FROM_BAG(item.UID))}
              aria-label="Remove item"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center mt-2">
            <span className="text-xl font-semibold flex items-center">
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
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="text-sm">
              <span className="text-gray-600">Size:</span>
              <span className="ml-2 font-medium">M</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-600">Quantity:</span>
              <span className="ml-2 font-medium">{item.Quantity}</span>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded">
              7 Days Return
            </span>
            <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded">
              Free Delivery
            </span>
          </div>
          
          <div className="mt-4 flex">
            <button
              type="button"
              className="flex items-center gap-1 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50"
              onClick={() => dispatch(bagActions.REMOVE_FROM_BAG(item.UID))}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagCard;
