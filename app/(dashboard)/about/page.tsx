import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <main className="min-h-screen w-full bg-[#000] text-white">

      <header className="w-full p-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-2">About</h2>

        <p className="font-bold text-[1.2rem]">
          project: <span className="text-yellow-500">UrbanFlexForge</span>
        </p>
        <p className="font-bold text-[1.2rem]">
          Type: <span className="text-yellow-500">AI web application</span>
        </p>
        <p className="font-bold text-[1.2rem]">
          author: <span className="text-yellow-500">lyubomyr kovbel</span>
        </p>
      </header>

      <section className="w-full p-4 flex flex-col md:flex-row items-center gap-5">
        <div>
          <p>
            this is a small web application that allows the user to interacte
            with an ai. From communication to genereating imagary, to even
            helping you get through your daily activity or content creation.
          </p>

          <p>
            The user is going to be able to call certain functions that are
            going ot be connecting to ai which will need to pay a small fee to
            interact with ai client. The fee will veriy from what type of client
            you are going to be using. Users may also get a membership and use
            it to either have unlimated calls or use it for something else.
          </p>

          <p>
            There will be a facuet where you will be able to get tokens, as well
            as vault where you will be able to store and grow your buck..
          </p>
        </div>

        <Image
          src="/bbS.png"
          alt="dead astronut"
          width={200}
          height={200}
          className="order-1 md:order-2 w-full md:w-1/3 shadow-lg rounded-lg border-4 mb-4 md:mb-0"
        />
      </section>
      
    </main>
  );
};

export default Page;

{
  /* <div className="max-w-6xl mx-auto mb-10 p-6 bg-[#111] text-white rounded-lg shadow-lg border-2">
        <blockquote className="border-l-4 border-[#3498db] pl-4 italic">
          <q className="text-xl font-semibold">
            
          </q>
          <p className="text-right mt-2">- LyubTheBest1</p>
        </blockquote>
      </div> */
}
