"use server";
import HandleUserInput from "@/app/components/dash/handleUserInput";

import CustomAi from "@/app/components/customai/customAi";
import { getUserBot } from "@/app/lib/Bot";
import Image from "next/image";

const Page = async ({ params }: { params: { cusIDAI: string } }) => {
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

  const messages = true;

  const userBot = await getUserBot(params.cusIDAI);

  if(!userBot) {
    console.log("there is no bot")
  }

  console.log(userBot);

  return (
    <main className="w-full min-h-screen bg-[#113] p-4">
      <section className="bg-[#222] mb-10 w-[300px] rounded-lg drop-shadow-lg p-2">
        <CustomAi botId={userBot} />
      </section>

      {/* Messages live here */}
      <article className="w-full h-[900px]">

        <div className="p-10 border-2 bg-[#444] h-[70%] flex items-center gap-4 flex-col flex-col-reverse overflow-auto">
          {messages ? (
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
            <div className="w-full h-full text-center text-2xl font-bold uppercasei">
              <h2>no messages</h2>
              <p>What were you looking to</p>
            </div>
          )}

          {/* Mapping over theamount of chats */}
        </div>

        {/* Create ^^ */}

        {/* input ^^ */}
        <HandleUserInput botId={params.cusIDAI} />
      </article>
    </main>
  );
};

export default Page;
