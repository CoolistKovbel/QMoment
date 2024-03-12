import { getSession } from "@/app/lib/actions";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const session = await getSession();

  console.log(session)

  return (
    <div className="w-full min-h-screen p-2 flex items-center justify-center">
      <div className="w-[800px] h-[720px] mx-auto p-4 bg-[#222] relative rounded-md">
        <div className="w-[100px] h-[100px] relative">
          <Image
            src={"/bbS.png"}
            alt="user profile image"
            className="drop-shadow-lg rounded-sm"
            fill
          />
        </div>

        <h2 className="text-2xl font-bold">username: <span className="text-sm">{session.username}</span></h2>
        <h2 className="text-2xl font-bold">current role: <span className="text-sm">{session.role}</span></h2>
        <h2 className="text-2xl font-bold">connected: <span className="text-sm">{session.metaAccount ? "🧑🏽‍💻" : "⚙️" }</span></h2>

        {/* <h2>email:{session.email}</h2>
        <h2>tokens:{session.token}</h2> */}
        <h2>Saved Session:</h2>

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
  );
};

export default Page;
