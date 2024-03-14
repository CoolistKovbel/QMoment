"use client"

import { handleUserComms } from "@/app/lib/actions";
import React from "react";
import { useFormState } from "react-dom";

const HandleUserInput = () => {

  const [state, dispatch] = useFormState(handleUserComms, undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget);

    try {
      dispatch(formData)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="w-[80%] mx-auto flex items-center justify-end gap-4 text-white "
      >
        <textarea
          className="p-3 bg-[#222] w-[100%] h-[200px] resize-none border-2 rounded-md drop-shadow-lg"
          placeholder="heart hurts little bit?"
          name="urbanText"
          id="urbanText"
        />
        <button className="bg-[#424] p-3 rounded-md drop-shadow-lg font-bold hover:bg-[#111]">
          enter
        </button>
      </form>
    </div>
  );
};

export default HandleUserInput;
