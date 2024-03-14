"use client"

import { useModal } from "@/app/hooks/use-modal-store";
import React from "react";

const GetProModel = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "getPro";

  const handleContinue = async () => {
    // Handle server connection
    console.log("Handling some connection");
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isModalOpen ? "" : "hidden"}`}>
    <div className="bg-[#222] rounded-md p-4 w-96 h-64">

      <button className="absolute top-2 right-2" onClick={handleClose}>
        {/* Close button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="w-full h-full text-white flex justify-between flex-col ">
        <h2 className="text-2xl font-bold">Get Pro Model</h2>
        <p className="text-sm text-gray-500">
          Tired of missing out? Get yourself situated with Pro.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-black text-white hover:bg-gray-800"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>


    </div>
  </div>
  );
};

export default GetProModel;
