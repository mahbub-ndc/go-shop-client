"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { addToCart } from "@/Redux/Features/cartSlice";
import { useAppDispatch } from "@/Redux/store";

import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

const SingleProduct = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();

  console.log("single", product.quantity);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product.data));
    toast.success("Product added in the cart");
  };
  return (
    <div className="grid md:grid-cols-2 gap-6 md:p-20 p-10">
      <div>
        {
          <Image
            className="rounded"
            src={product.data?.imageUrl}
            width={450}
            height={250}
            alt="image"
          />
        }
      </div>
      <div>
        <p>{product.data?.category}</p>
        <h2 className="text-3xl font-normal">{product.data?.name}</h2>
        <p className="mb-4 mt-3">{product.data?.status}</p>
        <p>{product.data?.description}</p>
        <p className="text-2xl mt-4">${product.data?.price}</p>
        <div className="flex gap-4 mt-4">
          <button onClick={() => handleAddToCart(product)}>
            <div className="badge badge-outline p-4">Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
