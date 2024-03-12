"use client";

import React, { useRef } from "react";

interface UploadImageFileProps {
  bannerImage: any;
  setBannerImage: any;
}

const UploadImageFile = ({
  bannerImage,
  setBannerImage,
}: UploadImageFileProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setBannerImage(file);
  };

  return (
    <div className="absolute bottom-[10%] right-0">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        name="blogImage"
      />
      <label
        htmlFor="blogImage"
        className="cursor-pointer bg-[#000] text-yellow-500 px-4 py-2 rounded-md hover:bg-[#333] transition duration-300 ease-in-out"
        onClick={handleClick}
      >
        Choose File
      </label>
    </div>
  );
};

export default UploadImageFile;
