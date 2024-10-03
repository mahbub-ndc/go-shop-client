"use server";

import { UserData } from "@/app/register/page";

export const registerUser = async (data: UserData) => {
  const res = fetch(`${process.env.BACKEND_URL}/create-user`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  return (await res).json();
};
