"use client";

import { useModal } from "../hooks/use-modal-store";

const CompButton = () => {
  const { onOpen } = useModal();

  const handleClickPro = () => {
    try {
      onOpen("getPro");
      console.log("pro model");
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleGetNFT = () => {
    try {
      onOpen("getNFT");
      console.log("handling NDT ");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[80%] flex items-center justify-between mx-auto pb-5">
      <button
        onClick={handleClickPro}
        className="bg-[#222] p-3 rounded-md font-bold drop-shadow-lg hover:bg-[#333]"
      >
        Get pro
      </button>

      <button
        onClick={handleGetNFT}
        className="bg-[#222] p-3 rounded-md font-bold drop-shadow-lg hover:bg-[#333]"
      >
        Get nft
      </button>
    </div>
  );
};

export default CompButton;
