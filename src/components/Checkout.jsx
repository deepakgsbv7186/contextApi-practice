import { useContext } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";
import CartContext from "../helper/CartContext";

const CheckOut = () => {
  const { items } = useContext(CartContext);
  console.log(items);
  return (
    <>
      <h2 className="my-10 text-xl font-bold text-green-400 text-center">
        Your Cart Items
      </h2>
      <section className="flex justify-center flex-wrap gap-10">
        {items.map((item, index) => (
          <CheckOutList
            key={index}
            name={item.name}
            price={item.price}
            imgUrl={item.imgUrl}
          />
        ))}
      </section>
    </>
  );
};

export default CheckOut;

const CheckOutList = ({ name, price, imgUrl }) => {
  return (
    <>
      <div className="flex w-[350px] rounded-xl p-3 shadow-slate-500 shadow-lg">
        <div className="w-1/3 space-y-4">
          <img
            src={imgUrl}
            alt={name}
            className="w-[100px] h-[120px] object-contain"
          />
        </div>
        <div className="flex flex-col w-2/3 p-2 gap-2">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-lg font-bold">₹{price}</p>
          <div className="flex w-[100px] justify-center space-x-2 items-center">
            <AiOutlinePlusCircle />
            <span>2</span>
            <GrSubtractCircle />
          </div>
          <div className="flex justify-around">
            <button className="hover:bg-red-400 hover:text-white px-1 font-light text-lg rounded-md">
              Remove
            </button>
            <button className="bg-orange-400 hover:bg-gradient-to-r from-orange-400 to-red-400 px-1 text-white font-bold text-lg rounded-md">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
