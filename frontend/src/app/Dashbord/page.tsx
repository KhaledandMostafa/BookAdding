"use client";
import axios from "axios";
import React, { useContext, useEffect, useMemo, useRef } from "react";
import { MainContext } from "../_Contexts/MainContext";

export default function Dashbord() {
  const { setBooks, Books }: any = useContext(MainContext);
  let NameBox = useRef();
  let desBox = useRef();
  let priceBox = useRef();

  function postbook() {
    axios
      .post("https://0823-41-233-93-160.ngrok-free.app/books", {
        title: NameBox?.current.value,
        price: priceBox?.current.value,
        description: desBox?.current.value,
      })
      .then((x) => setBooks(x?.data))
      .catch((x) => console.log(x));
  }

  useEffect(() => {
    console.log(NameBox.current.value);

    return () => {};
  }, []);

  return (
    <div className="p-10 flex flex-col items-center bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Name Book</h3>
        <input
          ref={NameBox}
          type="text"
          placeholder="Enter book name"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <h3 className="text-xl font-semibold mb-4">Info Book</h3>
        <input
          ref={desBox}
          type="text"
          placeholder="Enter book info"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <h3 className="text-xl font-semibold mb-4">Price Book</h3>
        <input
          ref={priceBox}
          type="number"
          placeholder="Enter book price"
          className="w-full p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={() => postbook()}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Create
        </button>
      </div>
    </div>
  );
}
