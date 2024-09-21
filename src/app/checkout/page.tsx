"use client";

import { clearCart } from "@/Redux/Features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  name: string;
  phone: number;
  address: string;
};

const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const products = useAppSelector((store) => store.cart.products);
  console.log(products);

  const { tax, taxRate, grandTotal, totalPrice, selectedItems } =
    useAppSelector((store) => store.cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    dispatch(clearCart());
  };

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
    <div className=" w-[90%] mx-auto">
      <div className="card-body ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-evenly flex-wrap">
            <div className="form-data ">
              <h2 className="text-4xl">Billing Details</h2>
              <div className="form-control w-[350px] py-5">
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control py-5">
                <input
                  {...register("phone")}
                  type="number"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  {...register("address")}
                  type="textarea"
                  placeholder="Address"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="bg-gray-100 w-[350px] p-10">
              <h2 className="text-3xl">Your Order</h2>

              {products.map((product) => (
                <>
                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <td className="p-0">
                            {product.name} x {product.quantity}
                          </td>
                          <td className="p-0">${product.price}</td>
                        </tr>
                        {/* row 2 */}
                      </tbody>
                    </table>
                  </div>

                  {/* <p key={product._id}>
                    {product.name} x {product.quantity} {product.price}
                  </p> */}
                </>
              ))}

              <p className="text-x text-dark mt-5">
                Tax ({taxRate * 100}%): ${tax.toFixed(3)}
              </p>
              <p className="font-normal mt-5">Delivery Charge: $15</p>
              <p className="font-bold pt-5">
                Grand Total: ${(grandTotal + 15).toFixed(3)}
              </p>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent btn-outline">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
