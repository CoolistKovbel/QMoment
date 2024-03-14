"use client";

import { useEffect, useState } from "react";
import GetProModel from "../models/GetProModel";
import GetNFTModel from "../models/GetNFTModel";

export const ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <GetProModel />
      <GetNFTModel />
    </>
  );
};
