import { SparklesHead } from "../components/authHeader";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full bg-[#111] text-white flex flex-col items-center justify-center">
 
      <SparklesHead />
      
      {children}
    </main>
  );
}
