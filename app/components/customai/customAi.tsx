"use client";

import Image from "next/image";

interface userParams {
  botId: any;
}

const CustomAi = ({ botId }: userParams) => {

  console.log(botId[0]?.name)

  return (
    <section className="flex items-center drop-shadow-lg">
      <div className="w-[100px] h-[100px] relative">
        <Image src={botId[0]?.image as string} alt="bot image" fill />
      </div>
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-[1.2rem] font-bold">{botId[0]?.name}</h2>
        <p className="text-[0.8rem] font-semi-bold leading-7">
          <span className="font-bold text-[1rem] mr-2">Purpose:</span>
          {botId[0]?.mainPurpose}
        </p>
      </div>
    </section>
  );
};

export default CustomAi;
