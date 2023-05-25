import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../helper/CartContext";

const Navbar = () => {
  const { items } = useContext(CartContext);
  // console.log(items.length);
  return (
    <>
      <nav className="h-12 bg-gradient-to-r from-green-400 to-green-200 text-white font-bold text-xl">
        <div className="w-[80%] mx-auto h-full flex justify-between items-center">
          <Link to={"/"}>
            <h1>Mobile Store</h1>
          </Link>
          <Link to={"/checkout"}>
            <div className="relative flex">
              <AiFillShopping className="text-4xl" />
              <span className="absolute bottom-0 right-0 bg-red-400 rounded-full px-1 text-xs">
                {/* {items.length} */}
                {items.length > 0 ? items.length : 0}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
