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

  if (status === "loading") return <Loader />;
  if (status === "rejected") return <p>Error fetching products</p>;

  return (
    <div className="justify-items-center overflow-hidden">
      <h5> Orders </h5>
      {list.length ? (
        list.map((order) => (
          <div
            className="content-center w-full h-fit mt-[5rem] bg-emerald-500"
            key={order.id}
          >
            <center className="bg-cyan-300">
              <p>
                Delivering to {order.n}, with PH.no : {order.no}, Pin Code :{" "}
                {order.pin} Address :{order.hno}, {order.c}, {order.st},{" "}
                {order.lm}.{" "}
              </p>
              <button
                type="button"
                className="btn btn-danger "
                onClick={() => dispatch(DeleteOrder(order.id))}
              >
                Cancel Order
              </button>{" "}
            </center>
            <div className="flex flex-wrap justify-center">
              {order.products &&
                order.products.map((item, index) => (
                  <Ordercard item={item} key={index}></Ordercard>
                ))}
            </div>
          </div>
        ))
      ) : (
        <center>
          <h5>No Orders Placed</h5>
        </center>
      )}
    </div>
  );
};
export default Orders;
