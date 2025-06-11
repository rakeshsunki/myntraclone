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

  if (status === "loading") {
    return (
      <div className="min-h-[400px] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (status === "rejected") {
    return (
      <div className="min-h-[400px] flex justify-center items-center">
        <div className="bg-red-50 text-red-600 p-6 rounded-lg! shadow">
          <h3 className="font-medium text-lg mb-2">Error fetching products</h3>
          <p>Please refresh the page or try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 px-4 bg-[rgb(206,220,223)]! mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
