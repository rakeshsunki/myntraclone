import { useSelector } from "react-redux";
import LIST from "./list";

const Headerlist = () => {
  const { list } = useSelector((state) => state.header);
  if (list !== null) {
    return (
      <div className="bg-white h-fit w-full justify-center hidden md:flex md:flex-wrap fixed top-20 text-xs gap-8 z-5">
        {list.map((item, index) => (
          <div key={index}>
            <b>{item.name}</b>
            <LIST item={item} />
          </div>
        ))}
      </div>
    );
  }
};

export default Headerlist;
