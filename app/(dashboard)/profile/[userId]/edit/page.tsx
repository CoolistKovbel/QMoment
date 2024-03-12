import EditMemberForm from "@/app/components/edit-form";
import UserProfileCard from "@/app/components/profile-card";
import { getSession } from "@/app/lib/actions";
import React from "react";

const Page = async () => {
  const session = await getSession();

  return (
    <main className="w-full min-h-screen p-2 flex items-center justify-center relative">
      <div className="w-[800px] h-[720px] mx-auto p-4 bg-[#222] relative rounded-md">
        <UserProfileCard user={session} />

        {/* <h2>email:{session.email}</h2>
        <h2>tokens:{session.token}</h2> */}

        <EditMemberForm user={session.userId} />
      </div>
    </main>
  );
};

export default Page;
