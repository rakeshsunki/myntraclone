import { FaIndianRupeeSign } from "react-icons/fa6";

const Ordercard = ({ item }) => {
  // Calculate final price after discount
  const finalPrice =
    item.product.price - (item.product.discount * item.product.price) / 100;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.33%-1rem)] flex flex-col">
      <div className="flex p-4 gap-3 items-start">
        {/* Product Image */}
        <div className="w-20 h-20 bg-gray-50 rounded flex-shrink-0 flex items-center justify-center">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow">
          <h3 className="font-medium text-gray-800 mb-1 line-clamp-1">
            {item.product.name}
          </h3>

          <div className="flex items-center mb-1">
            <span className="text-sm font-semibold flex items-center">
              <FaIndianRupeeSign className="text-xs mr-0.5" />
              {finalPrice.toFixed(0)}
            </span>
            {item.product.discount > 0 && (
              <>
                <span className="text-xs text-gray-500 line-through ml-1.5 flex items-center">
                  <FaIndianRupeeSign className="text-xs mr-0.5" />
                  {item.product.price}
                </span>
                <span className="ml-1.5 text-xs text-green-600">
                  {item.product.discount}% OFF
                </span>
              </>
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-600">
            <div className="flex items-center justify-between">
              <span>Quantity:</span>
              <span className="font-medium">{item.Quantity}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Size:</span>
              <span className="font-medium">M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Order ID */}
      <div className="bg-gray-50 px-4 py-2 mt-auto border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Order ID:</span>
          <span className="text-xs font-mono">
            {item.UID.substring(0, 8)}...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ordercard;
