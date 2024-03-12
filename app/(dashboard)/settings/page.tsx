import UpdateProfileForm from "@/app/components/auth/update-profile-form";
import UserProfileCard from "@/app/components/profile-card";
import { getSession } from "@/app/lib/actions";


const Page = async () => {

  const session = await getSession()

  console.log(session)

  return (
    <main className="w-full min-h-screen bg-[#111] text-white p-4">
      <h2>User profile</h2>
      
      <UserProfileCard user={session} />

      <UpdateProfileForm user={session.userId} />

    </main>
  );
};

export default Page;
