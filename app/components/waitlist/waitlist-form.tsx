import { whiteList } from "@/app/lib/action";

const WaitListForm = () => {
  return (
    <form action={whiteList}>
      <input
        type="email"
        placeholder="enter email here"
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-4 bg-neutral-950 placeholder:text-neutral-700"
        name="email"
        id="email"
      />
    </form>
  );
};

export default WaitListForm;
