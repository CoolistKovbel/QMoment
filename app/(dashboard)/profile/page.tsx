"use server";

import ProfileAiCreate from "@/app/components/profileAiCreate";
import { getUserBot } from "@/app/lib/Bot";
import { getSession } from "@/app/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {

  const session = await getSession();

  const aiBot = await getUserBot(session.userId as string);


  return (
    <div className="w-full min-h-screen p-2 flex items-center justify-center">
      <div className="w-[800px] h-[720px] mx-auto p-4 bg-[#222] relative rounded-md">
        <div className="w-[80%] mx-auto my-5">
          <div className="flex items-center w-full justify-between mb-2 w-[20%]">
            <div>
              <div className="w-[100px] h-[100px] relative mb-10">
                <Image
                  src={"/bbS.png"}
                  alt="user profile image"
                  className="drop-shadow-lg rounded-sm"
                  fill
                />
              </div>

              <div className="w-[150px] h-[150px] relative">
                <Image
                  src={session.image || "https://placekitten.com/150/150"}
                  fill
                  alt="user profilee"
                />
              </div>

              <h2 className="text-2xl font-bold">
                username: <span className="text-sm">{session.username}</span>
              </h2>
              <h2 className="text-2xl font-bold">
                current role: <span className="text-sm">{session.role}</span>
              </h2>
              <h2 className="text-2xl font-bold">
                connected:{" "}
                <span className="text-sm">
                  {session.metaAccount ? "🧑🏽‍💻" : "⚙️"}
                </span>
              </h2>
            </div>

            <div className="w-[200px] h-[200px] p-3 bg-[#FFFF00] rounded-md border-2 border-black drop-shadow-lg hover:bg-[#DAA520]">
              {Array.isArray(aiBot) && !aiBot ? (
                <div>
                  <div className="w-[100px] h-[100px] relative">
                    <Image
                      src={`${aiBot[0].image}`}
                      alt="image of users ai profile"
                      fill
                    />
                  </div>

                  <h2>{aiBot[0].name}</h2>
                  <h2>{aiBot[0].mainPurpose}</h2>
                  <p>{aiBot[0].botSession.length}</p>
                </div>
              ) : (
                <ProfileAiCreate />
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#444 w-full]">
          <h2 className="text-xl font-bold mb-3">Saved Session:</h2>

          <div className="w-[200px] h-[220px] p-2 bg-[#000] text-white text-sm rounded-md">
            <h2 className="text-xl font-bold">rawr</h2>
            <p className="text-[10px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              doloremque quas sunt reprehenderit quos asperiores beatae impedit
              aspernatur nesciunt accusamus!
            </p>
            <p>date: {Date.now()}</p>
            <Link
              href="/custom-ai/333"
              className="bg-[#777] p-2 text-md font-bold inline-block rounded-md drop-shadow-lg hover:bg-[#666]"
            >
              get back
            </Link>
          </div>

          {session.userId && (
            <a
              className="absolute top-10 right-10 text-white p-4 bg-black rounded-md uppercase font-bold text-sm"
              href={`/profile/${session.userId}/edit`}
            >
              edit profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
