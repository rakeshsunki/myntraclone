import { FaIndianRupeeSign } from "react-icons/fa6";
const Ordercard = ({ item }) => {
  console.log("Order Card", item);
  return (
    <>
      <div className="w-fit h-fit m-2 p-4 md:justify-center  md:flex shadow-[10px_10px_10px_gray] bg-[wheat]">
        <div className="md:h-[300px] md:w-[150px] p-2 shadow-[10px_10px_10px_gray] bg-white ">
          <div className="w-full  justify-items-center">
            <img src={item.product.image} className="h-35" />
          </div>
          <h5 className="pl-5">{item.product.name}</h5>
          <div className="h-[20%] flex items-center justify-evenly">
            <span>
              <b>
                Price :{item.product.price}{" "}
                <FaIndianRupeeSign className="inline" />
              </b>
            </span>
          </div>
        </div>
        <div className="h-fit w-fit m-4 flex justify-start items-center">
          <ul className="list-none">
            <li>
              <b>Product Name :</b> <pre>{item.product.name}</pre>
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
              <pre>{item.Quantity}</pre>
            </li>
            <li>
              <b>Final Amount :</b>
              <pre>
                {item.product.price -
                  (item.product.discount * item.product.price) / 100}
                <FaIndianRupeeSign className="inline" />
              </pre>
            </li>
            <li>
              <b>Ordered ID :</b>
              <pre>{item.UID}</pre>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Ordercard;
