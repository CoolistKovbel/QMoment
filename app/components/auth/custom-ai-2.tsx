"use client";

import { handleUserComms } from "@/app/lib/actions";

import React from "react";
import { useFormState } from "react-dom";

const CustomAiFormModel = () => {
  const [state, dispatch] = useFormState(handleUserComms, undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    

    try {
      dispatch(formData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111] p-4 flex flex-col gap-4 w-full"
    >
      <div className="flex items-center gap-4 w-full">

        <div className="w-full flex flex-col justify-between h-[300px] drop-shadow-lg rounded-md  bg-[#222] ">
     
          <label
            htmlFor="botName"
            className="bg-[#121]  p-2 rounded-md flex items-center justify-between bg-shadow-lg text-333 font-bold p-1 w-[100%]"
          >
            <span>botname:</span>
            <input
              type="text"
              className="text-black p-1"
              placeholder="botName"
              name="botName"
              id="botName"
            />
          </label>

          <label
            htmlFor="botPurpose"
            className="bg-[#121] p-2 rounded-md flex items-center justify-between bg-shadow-lg text-333 font-bold p-1 w-[100%]"
          >
            <span>Bot Purpose:</span>
            <textarea
              placeholder="botPurpose"
              name="botPurpose"
              id="botPurpose"
              className="h-[150px] text-black w-[300px] resize-none rounded-md p-1"
            />
          </label>

          <label
            htmlFor="ImageName"
            className="bg-[#121] text-sm p-2 rounded-md flex items-center justify-between bg-shadow-lg text-333 font-bold p-4 w-full"
          >
            <span>Bot Image:</span>
            <input type="file" name="ImageName" id="ImageName" />
          </label>

        </div>

      </div>

      <button  type="submit" className="bg-[#222] w-[30%] mx-auto text-white font-bold rounded-md p-3 inline">
        submit
      </button>

      <div>{state && state}</div>
    </form>
  );
};

export default CustomAiFormModel;
