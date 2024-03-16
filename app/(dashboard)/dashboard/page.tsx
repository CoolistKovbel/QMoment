"use server";

import SadLife from "@/app/components/dash/sad";
import { getUserBot } from "@/app/lib/Bot";
import { getSession } from "@/app/lib/actions";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const session = await getSession();

  const bot = await getUserBot(session.userId as string);

  console.log(session.userId);
  console.log(bot[0]);

  const messagesChat = [
    {
      bot: true,
      message:
        "Biltong pork chop boudin short loin, flank chislic corned beef venison andouille. Tongue pastrami leberkas kevin, venison sausage hamburger chicken meatball doner tenderloin buffalo bacon shoulder swine. Beef ribs corned beef tongue tail venison beef pork belly ham hock doner bacon tenderloin t-bone. Corned beef strip steak sirloin, pork loin turkey burgdoggen kevin boudin alcatra venison. Tail kielbasa sausage, shoulder meatball ham hock spare ribs pork loin hamburger bresaola tri-tip. Capicola kevin shoulder tail, leberkas andouille flank frankfurter. Jowl prosciutto beef porchetta, flank boudin turkey.",
      author: "lyubKovbel",
      image: "/TestConflict.png",
    },
    {
      bot: false,
      message:
        "Biltong chop boudin short loin, flank chislic corned beef venison andouille. Tongue pastrami leberkas kevin, venison sausage hamburger chicken meatball doner tenderloin buffalo bacon shoulder swine. Beef ribs corned beef tongue tail venison beef pork belly ham hock doner bacon tenderloin t-bone. Corned beef strip steak sirloin, pork loin turkey burgdoggen kevin boudin alcatra venison. Tail kielbasa sausage, shoulder meatball ham hock spare ribs pork loin hamburger bresaola tri-tip. Capicola kevin shoulder tail, leberkas andouille flank frankfurter. Jowl prosciutto beef porchetta, flank boudin turkey.",
      author: "lyub12",
      image: "/TestConflict.png",
    },
    {
      bot: true,
      message:
        "Biltong chop boudin short loin, flank chislic corned beef venison andouille. Tongue pastrami leberkas kevin, venison sausage hamburger chicken meatball doner tenderloin buffalo bacon shoulder swine. Beef ribs corned beef tongue tail venison beef pork belly ham hock doner bacon tenderloin t-bone. Corned beef strip steak sirloin, pork loin turkey burgdoggen kevin boudin alcatra venison. Tail kielbasa sausage, shoulder meatball ham hock spare ribs pork loin hamburger bresaola tri-tip. Capicola kevin shoulder tail, leberkas andouille flank frankfurter. Jowl prosciutto beef porchetta, flank boudin turkey.",
      author: "lyub12",
      image: "/TestConflict.png",
    },
    {
      bot: false,
      message:
        "Biltong chop boudin short loin, flank chislic corned beef venison andouille. Tongue pastrami leberkas kevin, venison sausage hamburger chicken meatball doner tenderloin buffalo bacon shoulder swine. Beef ribs corned beef tongue tail venison beef pork belly ham hock doner bacon tenderloin t-bone. Corned beef strip steak sirloin, pork loin turkey burgdoggen kevin boudin alcatra venison. Tail kielbasa sausage, shoulder meatball ham hock spare ribs pork loin hamburger bresaola tri-tip. Capicola kevin shoulder tail, leberkas andouille flank frankfurter. Jowl prosciutto beef porchetta, flank boudin turkey.",
      author: "lyub12",
      image: "/TestConflict.png",
    },
  ];

  return (
    <div className="w-full min-h-screen p-2">
      <div className="bg-[#322] text-white p-4 w-full min-h-screen">
        <section className="bg-[#222] p-4 rounded-md border-2 rounded-md w-[80%] mx-auto ">
          {/* Header */}
          <header className="flex items-center justify-between w-[40%] mx-auto mb-10">
            <div>
              <h2 className="text-2xl font-bold">dashboard bunny</h2>
            </div>

            <div className="text-center">
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src="/TestConflict.png"
                  alt="testing bot"
                  width={100}
                  height={100}
                />
              </div>
              <p className="font-bold text-2xl">lyubik</p>
              <p className="font-bold text-xl">coding</p>
            </div>
          </header>

          {/* Chat client */}

          <div className="flex items-center justify-center gap-4 bg-[#242] p-10 w-full h-fit drop-shadow-lg rounded-lg border-2 ">
            {/* Chat Client */}
            <div className="w-[50%] h-[600px] overflow-auto bg-[#223] p-4 rounded-md drop-shadow-lg">
              {messagesChat ? (
                messagesChat.map((item: any) => {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      className={`mb-4 p-2 flex rounded-md ${
                        item.bot
                          ? "bg-blue-500 text-white self-start"
                          : "bg-gray-300 text-gray-800 flex-row-reverse self-end"
                      }`}
                    >
                      <div className="w-[300px] text-center p-2">
                        <h2 className="text-xl font-bold">{item.author}</h2>

                        <div className="w-[100px] h-[100px] relative">
                          <Image src={item.image} alt={item.author} fill />
                        </div>
                      </div>

                      <p className="p-2 leading-5 text-sm">{item.message}</p>
                    </div>
                  );
                })
              ) : (
                <SadLife />
              )}
            </div>

            <div className="bg-[#223] h-[150px] w-[300px] drop-shadow-lg rounded-md flex items-center justify-center p-3 border-2 flex-col">
              <textarea
                placeholder="enter message here"
                className="w-full p-1 mb-2 bg-black text-[#F6E05E] rounded-md p-2 resize-none"
              />
              <button className="p-2  w-full rounded-md bg-[#F6E05E] font-bold uppercase drop-shadow-lg text-black hover:bg-[#111] hover:text-[#F6E05E]">
                submit
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
