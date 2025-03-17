import { useDispatch, useSelector } from "react-redux";
import BagCard from "./bagcard";
import { Link, useNavigate } from "react-router-dom";
import Orders from "./orders";
import { useState } from "react";
import { serverProducts } from "../../store/fetchstore";

const Bag = () => {
  const { baglist } = useSelector((state) => state.bag);
  const [isChoosen, setChoosen] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <>
      <center className="mt-[5rem]">
        <button
          className="btn btn-primary"
          onClick={() => {
            setChoosen(!isChoosen);
          }}
        >
          {isChoosen ? `Close` : `View Orders`}
        </button>
      </center>
      {isChoosen && <Orders />}
      {baglist.length == 0 ? (
        <h4 className="w-full h-[400px] bg-[peru] text-white flex items-center justify-center">
          Bag Is Empty:
          <Link
            to={"/"}
            type="button"
            className="bg-light"
            onClick={() => dispatch(serverProducts("products"))}
          >
            Shop Now
          </Link>
        </h4>
      ) : (
        <>
          <center>
            <h5 style={{ marginTop: "80px" }}>
              {baglist.length}- Item(s) In The Bag{" "}
              <button
                className="btn btn-success"
                onClick={() => {
                  navigate("/orderform");
                }}
              >
                PLace Order
              </button>
            </h5>
          </center>
          <div className="flex flex-wrap relative justify-center top-20 bg-white">
            {baglist.map((item, index) => (
              <BagCard item={item} key={index}></BagCard>
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default Bag;
