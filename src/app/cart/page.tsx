/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import CartDetails from "@/components/CartDetails";
import OrderSummary from "@/components/OrderSummary";
import { useAppSelector } from "@/Redux/hook";
import Link from "next/link";

const Cart = () => {
  const [isMounted, setIsMounted] = useState(false); // State to check if component is mounted
  const products = useAppSelector((store) => store.cart.products);

  // Ensure client-side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show loading or fallback during SSR
  if (!isMounted) {
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-spinner text-success"></span>
      </div>
    ); // Or a more styled placeholder/fallback
  }

  return (
    <div className="container mt-10 mx-auto">
      <div className="space-y-5 lg:mt-0 mt-5">
        {products.length ? (
          <div className="grid md:grid-cols-2 gap-4 md:gap-12 pl-0 sm:pl-20 ">
            <div className="w-full">
              {products.map((product: any) => (
                <CartDetails
                  key={product.id}
                  product={product}
                  suppressHydrationWarning={true}
                />
              ))}
            </div>

            <div className="order-summary">
              <OrderSummary />
            </div>
          </div>
        ) : (
          <>
            <p className="text-2xl text-red-500 text-center">
              No Products found in the cart!
            </p>
            <div className="flex items-center justify-center">
              <Link href="/shop">
                <button className="btn btn-success text-white">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
