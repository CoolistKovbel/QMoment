"use client";

import React from "react";
import { useFormState } from "react-dom";
import { usePathname } from "next/navigation";
import { handleUserUpdate } from "@/app/lib/actions";

interface UpdateProfileForm {
  user: string | undefined;
}

const UpdateProfileForm = ({user}:UpdateProfileForm) => {
  const pathname = usePathname();

  const userId = pathname;

  console.log(userId)
                              
  const updateUserWithId = handleUserUpdate.bind(null, user);
  const [state, dispatch] = useFormState(updateUserWithId, undefined);

  return (
    <form
      className="max-w-md mx-auto p-6 bg-gray-800 rounded-md shadow-md"
      action={dispatch}
    >
      <div>
        <label className="block text-white mb-2" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
        />
      </div>

      <div>
        <label className="block text-white mb-2" htmlFor="metaAccount">
          metaAccount 
        </label>
        <input
          type="text"
          id="metaAccount"
          name="metaAccount"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
        />
      </div>

      <div>
        <label className="block text-white mb-2" htmlFor="image">
          Image URL
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-white mb-2" htmlFor="password">
          Password
        </label>

        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
        />
      </div>

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
