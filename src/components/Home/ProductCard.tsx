/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React from "react";

const ProductCart = ({ product }: any) => {
  const { name, imageUrl, price, category } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-xl mb-10">
      <div className="card-body">
        <figure>
          {<Image src={imageUrl} alt="image" width={350} height={150} />}
        </figure>
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">${price}</div>
        </h2>
        <div>{category}</div>
        <div className="card-actions justify-end">
          <button>
            <div className="badge badge-outline">Add to Cart</div>
          </button>
          <button>
            <div className="badge badge-outline">View Product</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
