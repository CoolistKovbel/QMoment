import { cn } from "@/app/utils/cn";
import Image from "next/image";
import React from "react";

const Page = () => {
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
  ];

  return (
    <div className="w-full min-h-screen p-2">
      <div className="bg-[#322] text-white p-4 w-full  min-h-screen">
        <section className="bg-[#222] p-4 rouded-md border-2 rounded-md">
          {/* header */}
          <header className="flex items-center justify-between w-[40%] mx-auto mb-10">
            <div>
              <h2 className="text-2xl font-bold">dashboard bunny</h2>
            </div>

            <div className="text-center">
              <div className="w-[100px] h-[100px] relative">
                <Image src="/TestConflict.png" alt="testig bot" fill />
              </div>

              <p className="font-bold text-2xl">name</p>
              <p className="font-bold text-xl">coding</p>
            </div>
          </header>

          <article className="w-full h-[800px]">
            <div className="p-10 border-2 bg-[#111] h-[70%] flex items-center gap-4 flex-col flex-col-reverse overflow-auto">
              {messagesChat.map((item: any) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className={cn("w-full flex p-10 border-2", {
                      "flex-row-reverse": item.bot === true,
                    })}
                  >
                    <div className="w-[300px] text-center">
                      <h2 className="text-xl font-bold">{item.author}</h2>
                      <div className="w-[100px] h-[100px] relative">
                        <Image src={item.image} alt={item.author} fill />
                      </div>
                    </div>

                    <p className="p-2 leading-5 text-sm">{item.message}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-4">
              <form className="w-[80%] mx-auto flex items-center justify-end gap-4 text-white ">
                <textarea
                  className="p-3 bg-[#222] w-[100%] h-[200px] resize-none border-2 rounded-md drop-shadow-lg"
                  placeholder="heart hurts little bit?"
                />
                <button className="bg-[#424] p-3 rounded-md drop-shadow-lg font-bold hover:bg-[#111]">
                  enter
                </button>
              </form>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Page;
