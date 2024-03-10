"use client";

import { UpdateUserProfile } from "@/app/lib/action";
import React from "react";
import { useFormState } from "react-dom";
import { usePathname } from "next/navigation";

const UpdateProfileForm = () => {
  const pathname = usePathname();

  const userId = pathname.split("/")[2].toString();

  const updateUserWithId = UpdateUserProfile.bind(null, userId);
  const [state, dispatch] = useFormState(updateUserWithId, undefined);

  return (
    <form
      className="max-w-md mx-auto p-6 bg-gray-800 rounded-md shadow-md"
      action={dispatch}
    >
      <label className="block text-white mb-2" htmlFor="username">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
      />

      <label className="block text-white mb-2" htmlFor="image">
        Image URL
      </label>
      <input
        type="file"
        id="image"
        name="image"
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
      />

      <div className="mb-4">
        <label
          htmlFor="preference"
          className="block text-gray-400 text-sm mb-2"
        >
          Choose your preference:
        </label>
        <select
          id="preference"
          name="preference"
          className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400 text-black"
        >
            
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="blockchain">Blockchain</option>
          <option value="ui">UI Design</option>
          <option value="fullStack">Full Stack</option>
        </select>
      </div>

      <label className="block text-white mb-2" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Update Settings
      </button>

      {state && (
        <div className="max-w-4xl mx-auto  text-yellow-500 font-bold flex items-center justify-center h-[100px]">
          <p className="text-sm">{state}</p>
        </div>
      )}
    </form>
  );
};

export default UpdateProfileForm;
