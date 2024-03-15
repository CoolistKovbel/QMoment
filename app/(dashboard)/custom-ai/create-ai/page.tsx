import CustomAiForm from "@/app/components/auth/custom-ai";
import React from "react";

const Page = () => {
  return (
    <main className="w-full min-h-screen bg-[#222]">

      <header className="p-4 bg-[#211]">
        <h2 className="text-4xl font-bold">Create Ai</h2>
        <p className="text-2xl font-semi-bold capitalize">
          configure your own ai, this is going to be your main ai that you will
          have through out your session.
        </p>
      </header>


      <CustomAiForm />

    </main>
  );
};

export default Page;
