"use client";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "./_Contexts/MainContext";
import axios from "axios";

export default function Home() {
  const { filter, Books }: any = useContext(MainContext);

  return (
    <div>
      {filter?.map((item: string, index: number) => (
        <div key={index} className="flex flex-wrap gap-6">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="card-body border border-gray-300 rounded-lg shadow-lg p-6">
              <h2 className="card-title text-xl font-semibold mb-4">
                {item.title}
              </h2>
              <p>{item.description}</p>
              <div className="card-actions flex justify-end mt-4">
                <button className="btn bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  {item.price} EGP
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
