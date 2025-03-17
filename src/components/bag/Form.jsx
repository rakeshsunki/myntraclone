import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // ❌ Remove Form import
import { submitOrder } from "../../store/bag";
import { bagActions } from "../../store/mainStore";

const OrderForm = () => {
  const { baglist } = useSelector((state) => state.bag);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="h-[800px] m-6 md:m-20 grid place-items-center bg-[rgba(174,216,150,0.856)] p-8 shadow-[10px_10px_10px_gray]"
    >
      <div>
        <p>Full Name</p>
        <input
          placeholder="Enter Name Here"
          required
          type="text"
          ref={name}
          className="m-2 h-6 bg-white"
        />
        <p>Phone Number</p>
        <input
          placeholder="Enter Mobile Number Here"
          required
          ref={number}
          className="m-2 h-6 bg-white"
        />
        <p>Pin Code</p>
        <input
          placeholder="Enter PIN CODE Here"
          type="text"
          required
          ref={pincode}
          className="m-2 h-6 bg-white"
        />
        <p>House No.</p>
        <input
          placeholder="House.No/Building Name/Apartment Name"
          type="text"
          required
          ref={house_number}
          className="m-2 h-6 bg-white"
        />
        <p>City Name</p>
        <input
          placeholder="Enter City Here"
          type="text"
          required
          ref={city}
          className="m-2 h-6 bg-white"
        />
        <p>Street Name</p>
        <input
          placeholder="Enter Street Name Here"
          required
          ref={street}
          className="m-2 h-6 bg-white"
        />
        <p>Land Mark</p>
        <input
          placeholder="Land Mark Near Here"
          required
          ref={landmark}
          className="m-2 h-6 bg-white"
        />
        <button type="submit" className="btn btn-success">
          Place Order
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
