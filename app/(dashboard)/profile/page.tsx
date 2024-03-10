import Image from "next/image";
import React from "react";

const Page = () => {

  return (
    <div>
        
      <div className="w-[100px] h-[100px] relative">
        <Image
          src={"/bbS.png"}
          alt="user profile image"
          className="drop-shadow-lg rounded-sm"
          fill
        />
      </div>

      <h2>username</h2>
      <h2>email:</h2>
      <h2>tokens:</h2>
      <h2>Saved Session:</h2>


    </div>
  );
};

export default Page;
