import CompButton from "@/app/components/compButton";
import EditMemberForm from "@/app/components/edit-form";
import UserProfileCard from "@/app/components/profile-card";
import { getSession } from "@/app/lib/actions";
import React from "react";

const Page = async () => {
  const session = await getSession();

  const isPro = session.isPro;

  return (
    <main className="w-full min-h-screen p-2 flex items-center justify-center relative">
      <div className="w-[800px] h-[720px] mx-auto p-4 bg-[#222] relative rounded-md">
        <div className="w-full flex gap-2">
          <UserProfileCard user={session} />

          {isPro ? (
            <div className="bg-[#231] w-[70%] rounded-md shadow-bg-lg border-[1px]">
              <h2 className="p-2 bg-[#222] text-white font-bold">pro?</h2>

              <p>
                get pro today, save on the amount of tokens you have to use and
                use it for something else instead.
              </p>
            </div>
          ) : (
            <div className="bg-[#231] w-[70%] rounded-md shadow-bg-lg border-[1px]">
              <h2 className="p-2 bg-[#222] text-white font-bold">
                pro? Get pro today
              </h2>

              <ul className="p-5 text-sm  list-disc">
                <li>
                  get pro today, save on the amount of tokens you have to use
                  and use it for something else instead.
                </li>

                <li>no need to use tokens for each chat</li>

                <li>capitable with both sessions</li>
              </ul>

              <CompButton />
            </div>
          )}
        </div>

        {/* <h2>email:{session.email}</h2>
        <h2>tokens:{session.token}</h2> */}

        <EditMemberForm user={session.userId} />
      </div>
    </main>
  );
};

export default Page;
