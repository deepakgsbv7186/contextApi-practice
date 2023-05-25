import productItems from "../helper/ProductData";
import Card from "./Card";

const Products = () => {
  // console.log(productItems);

  return (
    <>
      <section className="flex flex-wrap gap-6 justify-center mt-10">
        {productItems.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            imgUrl={product.imgUrl}
          />
        ))}
      </section>
    </>
  );
};

export default Products;
