import CartContext from "../helper/CartContext";
import { useContext } from "react";

const Card = ({ name, price, imgUrl }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className="w-[350px] h-[480px] p-6 rounded-xl shadow-slate-500 shadow-xl">
        <div className="flex flex-col space-y-4">
          <img
            src={imgUrl}
            alt="mobile"
            className="w-full h-[300px] object-contain"
          />
          <div className="flex justify-between py-3 text-xl font-semibold">
            <h2>{name}</h2>
            <p>₹{price}</p>
          </div>
          <button
            onClick={() => addToCart(name, price)}
            className="bg-orange-400 hover:bg-gradient-to-r from-orange-400 to-red-400 py-1 text-white font-bold text-2xl rounded-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
