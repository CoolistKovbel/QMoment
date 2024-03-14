import HeaderNav from "../components/header-nav";
import { ModalProvider } from "../components/providers/model-provider";
import { getSession } from "../lib/actions";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSession(); // fix some warning error

  return (
    <main className="min-h-screen w-full bg-[#111] text-white flex flex-col items-center justify-center">
      <HeaderNav user={user} />
      {children}
      <ModalProvider />
    </main>
  );
}
