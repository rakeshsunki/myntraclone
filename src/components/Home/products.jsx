import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serverProducts } from "../../store/fetchstore";
import Cards from "./cards";
import Loader from "./loader";

const Products = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.products);
  useEffect(() => {
    if (status === "empty") {
      dispatch(serverProducts("products"));
    }
  }, [status, dispatch]);

  if (status === "loading") return <Loader />;
  if (status === "rejected") return <p>Error fetching products</p>;

  return (
    <div className="flex flex-wrap justify-center relative top-20 !bg-[rgb(206,220,223)]">
      {list.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
