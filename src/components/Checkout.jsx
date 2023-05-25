import { useContext } from "react";
import CartContext from "../helper/CartContext";

const CheckOut = () => {
  const { items } = useContext(CartContext);
  console.log(items);
  return (
    <>
      <section>
        {items.map((item, index) => (
          <CheckOutList key={index} name={item.name} price={item.price} />
        ))}
      </section>
    </>
  );
};

export default CheckOut;

const CheckOutList = ({ name, price }) => {
  return (
    <>
      <div>{name}</div>
      <div>₹{price}</div>
    </>
  );
};
