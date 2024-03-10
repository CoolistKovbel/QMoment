import Image from "next/image";
import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="bg-[#000] text-white p-6 p-y-[20px] flex items-center justify-between flex-col md:flex-row">

      <div className="flex flex-col text-center md:text-left gap-[14px] mb-10 md:mb-0">

        <h2 className="flex items-center text-center w-full justify-center md:justify-start">
          <Link href='/' className="font-bold text-xl">LunarCrypticStation </Link>
          <Image
            src="/bbS.png"
            alt="you want the moon girl.... watch me garb not grab it."
            width={32}
            height={32}
          />
        </h2>

        <p className="text-yellow-500 text-sm">
          The place to be to hear my thoughts spill and dreams die
        </p>
      </div>

      <div className="flex justify-end gap-[100px] flex-col md:flex-row w-full">

        <div className=" flex flex-col gap-[10px] font-semibold text-center  w-full md:w-[140px]">

          <span className="bg-emerald-500 p-2 text-center rounded-md font-bold  ">
            Links
          </span>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className=" flex flex-col gap-[10px] font-semibold text-center w-full md:w-[140px]">
          <span className="bg-emerald-500 p-2 text-center rounded-md font-bold ">
            Social
          </span>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>

      </div>

    </footer>
  );
};

export default MainFooter;
