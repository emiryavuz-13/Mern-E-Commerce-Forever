import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSaller = () => {
  const { products } = useContext(ShopContext);
  const [bestSaller, setBestSaller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSaller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aspernatur placeat est maiores optio esse! Quae sunt esse laudantium
          libero dolorum distinctio provident quisquam sequi, doloribus dicta
          maiores minus dolorem!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSaller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSaller;
