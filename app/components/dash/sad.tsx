"use client";

const SadLife = () => {

  const handleClick = () => {
    try {

      console.log(
        "BeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeewweweweepP"
      );

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-2 font-bold text-2xl capitalize">
      <h2 className="text-2xl">sorry no messages</h2>
      <p className="text-sm">create session?</p>
      <button
        onClick={handleClick}
        className="p-3 bg-[#222] font-size border-2 text-sm rounded-lg shadow-drop-lg"
      >
        new session
      </button>
    </div>
  );
};

export default SadLife;
