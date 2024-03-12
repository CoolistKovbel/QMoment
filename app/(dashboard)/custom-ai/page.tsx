import { getSession } from "@/app/lib/actions";
import React from "react";

const Page = async () => {
  const user = await getSession();
  const userPro = (user.role = "USER");


  

  if (userPro === "USER") {
    return (
      <main className="w-full min-h-screen bg-[#222] text-white ">
        <h2>this is userpro</h2>

      </main>
    );
  } else {
    return (
      <main className="w-full min-h-screen bg-[#222] text-white ">
        <h2>this is user not pro</h2>
      </main>
    );
  }
};

export default Page;
