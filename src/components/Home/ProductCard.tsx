/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { addToCart } from "@/Redux/Features/cartSlice";
import { useAppDispatch } from "@/Redux/hook";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const ProductCart = ({ product }: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    toast.success("Product added in the cart");
  };

  const handleProductDetails = () => {
    router.push(`product/${product._id}`);
  };
  const { name, imageUrl, price } = product;
  return (
    <div className="card shadow mb-10 mx-auto">
      <div className="card-body p-0 gap-0">
        <figure>
          {<Image src={imageUrl} alt="image" width={350} height={150} />}
        </figure>
        <div className="inner-text p-5">
          <h2 className="card-title font-normal">
            {name}
            <div className="badge badge-secondary">${price}</div>
          </h2>

          <div className="card-actions justify-start mt-3">
            <button onClick={() => handleAddToCart(product)}>
              <div className="badge badge-outline p-4">Add to Cart</div>
            </button>
            <button>
              <div
                onClick={() => handleProductDetails()}
                className="badge badge-outline p-4"
              >
                View Product
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
