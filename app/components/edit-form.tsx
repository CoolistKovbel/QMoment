"use client";

import React, { useState } from "react";
import { useFormState } from "react-dom";
import { handleUserUpdate } from "../lib/actions";
import UploadImageFile from "./uploadFile";

interface EditMemberFormProps {
  user: any;
}

const EditMemberForm = ({ user }: EditMemberFormProps) => {
  const [loading, setLoading] = useState(false);
  const [userImage, setUserImage] = useState("");

  const updateInvoiceWithId = handleUserUpdate.bind(null, user as string);

  const [state, dispatch] = useFormState(updateInvoiceWithId, undefined);

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    const formData = new FormData(e.currentTarget);
    formData.append("image", userImage);

    try {
      setTimeout(async () => {
        await dispatch(formData);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="mb-8 w-full relative p-5" onSubmit={handleClick}>
      <div className="w-[200px] h-full flex flex-col gap-5">
        <label htmlFor="username">
          <span className="text-md  font-bold inline-block my-2 uppercase">
            Username:{" "}
          </span>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter new username"
            className="p-2 bg-[#223] text-white  border-2"
          />
        </label>
        <label htmlFor="email">
          <span className="text-md  font-bold inline-block my-2 uppercase">
            Email:{" "}
          </span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter new email"
            className="p-2 bg-[#223] text-white  border-2"
          />
        </label>
        <label htmlFor="password">
          <span className="text-md  font-bold inline-block my-2 uppercase">
            password:{" "}
          </span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter new password"
            className="p-2 bg-[#223] text-white  border-2"
          />
        </label>
        <label htmlFor="email">
          <span className="text-md  font-bold inline-block my-2 uppercase">
            metaddress
          </span>
          <input
            type="text"
            id="metaAccount"
            name="metaAccount"
            placeholder="enter new metaaddress"
            className="p-2 bg-[#223] text-white  border-2"
          />
        </label>
      </div>

      <UploadImageFile bannerImage={userImage} setBannerImage={setUserImage} />

      {userImage && (
        <div className="w-[300px] h-[300px] drop-shadow-lg bg-[#111] absolute top-9 right-0 "></div>
      )}

      <button className="font-bold p-2 bg-black rounded-md inline-block my-2">
        Update account
      </button>

      {state && (
        <div className="max-w-4xl mx-auto  text-yellow-500 font-bold flex items-center justify-center h-[100px]">
          <p className="text-sm">{state}</p>
        </div>
      )}
    </form>
  );
};

export default EditMemberForm;
