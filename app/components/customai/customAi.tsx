"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface userParams {
  botId: any;
}

const CustomAi = ({ botId }: userParams) => {

  console.log(botId[0])

  return (
    <section>
      <div className="w-[100px] h-[100px] relative">
        <Image src={botId[0].image as string} alt="bot image" fill />
      </div>
    </section>
  );
};

export default CustomAi;
