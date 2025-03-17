import { useState } from "react";
import Headerleft from "./headerleft";
import Headerright from "./headerright";
import Sidebar from "./Sidebar";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-white w-full h-20 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Headerleft setIsOpen={setIsOpen} />
        <Headerright />
      </div>
    </>
  );
};
export default Header;
