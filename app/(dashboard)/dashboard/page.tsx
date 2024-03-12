import Image from "next/image";
import React from "react";

const Page = () => {

  const messagesChat = [
    {
      message:
        "Biltong pork chop boudin short loin, flank chislic corned beef venison andouille. Tongue pastrami leberkas kevin, venison sausage hamburger chicken meatball doner tenderloin buffalo bacon shoulder swine. Beef ribs corned beef tongue tail venison beef pork belly ham hock doner bacon tenderloin t-bone. Corned beef strip steak sirloin, pork loin turkey burgdoggen kevin boudin alcatra venison. Tail kielbasa sausage, shoulder meatball ham hock spare ribs pork loin hamburger bresaola tri-tip. Capicola kevin shoulder tail, leberkas andouille flank frankfurter. Jowl prosciutto beef porchetta, flank boudin turkey.",
      author: "lyubKovbel",
      image: "/TestConflict.png",
    },
    {
      message:
        "Biltong chop boudin short loin, flank chislic corned beef venison andouille. Tongue pastrami leberkas kevin, venison sausage hamburger chicken meatball doner tenderloin buffalo bacon shoulder swine. Beef ribs corned beef tongue tail venison beef pork belly ham hock doner bacon tenderloin t-bone. Corned beef strip steak sirloin, pork loin turkey burgdoggen kevin boudin alcatra venison. Tail kielbasa sausage, shoulder meatball ham hock spare ribs pork loin hamburger bresaola tri-tip. Capicola kevin shoulder tail, leberkas andouille flank frankfurter. Jowl prosciutto beef porchetta, flank boudin turkey.",
      author: "lyub12",
      image: "/TestConflict.png",
    },
  ];

  return (
    <div className="w-full min-h-screen p-2">
      <div>
        <section>
          <header>
            <header>Bile</header>
          </header>

          <article>

            <div>
              {messagesChat.map((item: any) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className="w-full flex p-10 border-2"
                  >

                    <div className="w-[300px]" >
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

            <div>
              <form>
                <input type="text" placeholder="heart hurts little bit?" />
                <button></button>
              </form>
            </div>

          </article>
          
        </section>
      </div>
    </div>
  );
};

export default Page;
