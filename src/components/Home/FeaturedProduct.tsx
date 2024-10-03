/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import ProductCart from "./ProductCard";

const FeaturedProducts = async () => {
  const res = await fetch("https://go-shop-backend.vercel.app/api/products");

  const products = await res.json();
  //console.log(products);
  return (
    <div className="mb-10">
      <div className="text-center text-4xl py-10 font-bold mt-5">
        Featured Products
      </div>
      <div className="grid md:grid-cols-4  md:gap-8 md:w-[94%] w-full mx-auto">
        {products?.data?.map((product: any) => (
          <ProductCart key={product._id} product={product}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
