/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CartDetails from "@/components/CartDetails";
import OrderSummary from "@/components/OrderSummary";
import { useAppSelector } from "@/Redux/hook";
import Link from "next/link";

const Cart = () => {
  const products = useAppSelector((store) => store.cart.products);
  //console.log(products);
  return (
    <>
      <div className="container mt-10 mx-auto">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            <>
              <div className="flex  justify-evenly">
                <div className="w-2/3">
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
            </>
          ) : (
            <>
              <p className="text-2xl text-red-500 text-center">
                {" "}
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
    </>
  );
};

export default Cart;
