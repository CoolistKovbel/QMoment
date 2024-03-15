import { getSession } from "@/app/lib/actions";
import dbConnect from "@/app/lib/db";
import { Bot } from "@/app/models/Bot";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  await dbConnect();

  const user = await getSession();
  const userPro = (user.role = "USER");

  const hasBot = await Bot.find({ botParent: user.userId });

  if (Array.isArray(hasBot) && hasBot.length > 0) {
    console.log(hasBot);
  } else {
    console.log("there is no bot or the array is empty");
  }

  if (userPro === "USER") {
    return (
      <main className="w-full min-h-screen bg-[#222] text-white flex items-center justify-center">
        <div className="w-[80%] bg-[#444] h-[800px] drop-shadow-lg border-2">
          <section className="w-full h-full ">
            {Array.isArray(hasBot) && hasBot.length > 0 ? (
              <header className="w-full bg-[#222] font-bold p-4">
                <nav className="w-full flex items-center justify-around">
                  <Link
                    href="/"
                    className="p-4 font-bold text-xl hover:bg-[#111] uppercase"
                  >
                    customs
                  </Link>
                  <Link href="/" className="p-4 font-bold text-xl">
                    settings
                  </Link>
                </nav>
              </header>
            ) : (
              <header className="w-full bg-[#222] font-bold p-4">
                <nav className="w-full flex items-center justify-around">
                  <Link
                    href="/custom-ai/create-ai"
                    className="bg-[#234] text-white p-4 text-2xl rounded-md border-2 font-bold capitalize drop-shadow-lg hover:bg-[#222]"
                  >
                    Create a bot
                  </Link>
                </nav>
              </header>
            )}

            <div className="w-full h-[80%] bg-[#000]">
              <ul className="text-2xl w-full h-full font-bold flex flex-col justify-start gap-10 overflow-auto p-4">
                {Array.isArray(hasBot) &&
                  hasBot.map((item: any) => (
                    <li
                      key={crypto.randomUUID()}
                      className="w-full p-4 bg-[#222] hover:bg-[#231] flex items-center justify-between rounded-md shadow-drop-lg"
                    >
                      <div className="w-[400px] flex">
                        <div className="min-w-[100px] h-[100px] relative">
                          <Image src={item.image} alt="ghostly ai shell" fill />
                        </div>

                        <div className="w-[90%]">
                          <h2>{item.name}</h2>
                          <p className="text-[14px]">{item.mainPurpose}</p>
                        </div>
                      </div>

                      <a
                        href={`/custom-ai/${item._id}`}
                        className="bg-[#342] p-4 font-bold text-2xl rounded-md drop-shadow-lg capitalize hover:bg-[#111]"
                      >
                        latest session
                      </a>
                    </li>
                  ))}
              </ul>
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
