/* eslint-disable @typescript-eslint/no-explicit-any */
import { clearCart } from "@/Redux/Features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { CreditCard, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const OrderSummary = () => {
  const dispatch = useAppDispatch();
  const { tax, taxRate, grandTotal, totalPrice, selectedItems } =
    useAppSelector((store) => store.cart);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" lg:w-80 w-full h-full bg-slate-100 rounded">
      <div className="px-6 py-4 space-y-10">
        <h1 className="text-3xl font-bold text-dark">Order Summary</h1>
        <p className="text-x text-dark">Added Items : {selectedItems}</p>
        <p className="text-x text-dark">
          Total Price : ${Number(totalPrice).toFixed(2)}
        </p>
        <p className="text-x text-dark">
          Tax ({taxRate * 100}): ${Number(tax).toFixed(3)}
        </p>
        <h3 className="text-x font-semibold text-dark mt-4">
          Sub Total ${Number(grandTotal).toFixed(3)}
        </h3>
      </div>
      <div className="px-4 pb-6">
        {" "}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClearCart();
          }}
          className="bg-red-500 px-3 py-2 text-white  mt-2 rounded-md w-full text-xs flex justify-between items-center mb-4"
        >
          <span>Clear Cart</span>
          <Trash2 className="inline" width={15} height={15} />
        </button>
        <Link href="/checkout">
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-green-600 px-3 py-2 text-white  mt-2 rounded-md w-full text-xs flex justify-between items-center"
          >
            <span>Proceed Checkout</span>

            <CreditCard className="inline" width={15} height={15} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
