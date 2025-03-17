import { useDispatch } from "react-redux";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { bagActions } from "../../store/mainStore";

const BagCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-4/5 m-4 p-4 md:justify-around md:flex shadow-[10px_10px_10px_gray] bg-[wheat]">
      <div className="md:h-[500px] md:w-[300px] p-2 shadow-[10px_10px_10px_gray] bg-white">
        <div className="w-full h-[70%] justify-items-center">
          <img src={item.product.image}></img>
        </div>
        <h5 className="pl-5">{item.product.name}</h5>
        <div className="h-[20%] flex items-center justify-evenly">
          <span>
            <b>
              Price :{item.product.price}{" "}
              <FaIndianRupeeSign className="inline" />
            </b>
          </span>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch(bagActions.REMOVE_FROM_BAG(item.UID))}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="h-fit w-fit m-4 flex justify-start items-center">
        <ul className="list-none">
          <li>
            <b>Porduct Name :</b> <pre>{item.product.name}</pre>
          </li>
          <li>
            <b>Product Price :</b>
            <pre>
              {item.product.price}
              <FaIndianRupeeSign className="inline" />
            </pre>
          </li>
          <li>
            <b>Discount Offered :</b>
            <pre>{item.product.discount} %</pre>
          </li>
          <li>
            <b>Quantity :</b>
            <pre>{item.Quantity} </pre>
          </li>
          <li>
            <b>Final Amount :</b>
            <pre>
              {item.product.price -
                (item.product.discount * item.product.price) / 100}
              <FaIndianRupeeSign className="inline" />
            </pre>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default BagCard;
