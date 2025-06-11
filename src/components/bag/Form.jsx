import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitOrder } from "../../store/bag";
import { bagActions } from "../../store/mainStore";

const OrderForm = () => {
  const { baglist } = useSelector((state) => state.bag);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Form refs
  const name = useRef();
  const number = useRef();
  const pincode = useRef();
  const house_number = useRef();
  const city = useRef();
  const street = useRef();
  const landmark = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = name.current.value;
    const no = number.current.value;
    const pin = pincode.current.value;
    const hno = house_number.current.value;
    const c = city.current.value;
    const st = street.current.value;
    const lm = landmark.current.value;

    dispatch(submitOrder({ n, no, pin, hno, c, st, lm, products: baglist }));
    dispatch(bagActions.FORMSUBMIT());

    navigate("/orders");
  };

  return (
    <div className="max-w-3xl mx-auto mt-20 mb-10 px-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Shipping Address</h1>
      
      <form 
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                placeholder="Enter your name"
                required
                type="text"
                ref={name}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            {/* Phone Number */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                placeholder="Enter your mobile number"
                required
                type="tel"
                ref={number}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            {/* Pin Code */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
              <input
                placeholder="Enter PIN code"
                type="text"
                required
                ref={pincode}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            {/* City */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                placeholder="Enter city name"
                type="text"
                required
                ref={city}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            {/* House Number */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">House No. / Building Name</label>
              <input
                placeholder="Flat, House no., Building, Apartment"
                type="text"
                required
                ref={house_number}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            {/* Street */}
            <div className="col-span-1 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Street / Road Name</label>
              <input
                placeholder="Enter street name"
                required
                ref={street}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            {/* Landmark */}
            <div className="col-span-1 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Landmark</label>
              <input
                placeholder="Nearby landmark (optional)"
                ref={landmark}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
        
        <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            All fields are required except landmark
          </div>
          <button 
            type="submit" 
            className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
