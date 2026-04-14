"use client";
const GetLSData = (keyName) => {
  if (typeof window === "undefined") return;
  let cart = localStorage.getItem(keyName);
  return cart ? JSON.parse(cart) : [];
};

export default GetLSData;
