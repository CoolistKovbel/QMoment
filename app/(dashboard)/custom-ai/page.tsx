import { getSession } from "@/app/lib/actions";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await getSession();
  const userPro = (user.role = "USER");


  

  if (userPro === "USER") {
    return (
      <main className="w-full min-h-screen bg-[#222] text-white flex items-center justify-center">

        <div className="w-[80%] bg-[#444] h-[800px] drop-shadow-lg border-2">

          <section className="">

                <header className="w-full bg-[#222] font-bold p-3">
                  <nav className="w-full flex items-center justify-around">
                    <Link href="/" className="p-4 font-bold text-xl hover:bg-[#111]">appricut</Link>
                    <Link href="/" className="p-4 font-bold text-xl">settings</Link>
                  </nav>
                </header>

                <div className="w-full h-[90%] bg-[#000] p-4">

                  <h2 className="text-2xl font-bold">bloig</h2>

                </div>
          </section>


        </div>

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
