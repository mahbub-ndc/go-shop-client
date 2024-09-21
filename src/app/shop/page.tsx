/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import ProductCart from "@/components/Home/ProductCard";

const ShopPage = async () => {
  const res = await fetch("http://localhost:5000/api/products");

  const products = await res.json();
  //console.log(products);
  return (
    <>
      <div className="text-center text-4xl py-10 font-bold">Shop</div>
      <div className="flex gap-6">
        {products?.data?.map((product: any) => (
          <ProductCart key={product._id} product={product}></ProductCart>
        ))}
      </div>
    </>
  );
};

export default ShopPage;
