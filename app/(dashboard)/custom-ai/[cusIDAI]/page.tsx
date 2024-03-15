"use server"

import CustomAi from "@/app/components/customai/customAi";
import { getUserBot } from "@/app/lib/Bot";

const Page = async ({ params }: { params: { cusIDAI: string } }) => {
  
  const userBot = await getUserBot(params.cusIDAI)

  console.log(userBot)

  return (
    <main className="w-full min-h-screen bg-[#113] p-4">
      <section className="bg-[#222] w-full rounded-lg drop-shadow-lg p-2">

        <header>
          <h2>AI </h2>
        </header>

        <CustomAi botId={userBot} />

      </section>
    </main>
  );
};

export default Page;
