"use client"

import { useModal } from "../hooks/use-modal-store";

const ProfileAiCreate = () => {
    const { onOpen } = useModal();
    
    const handleCreate = () => {
        try {
            
            onOpen("createAI")
            console.log('working ai model')

        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className="flex items-center justify-center flex-col w-full h-full gap-2">
    <h2 className="text-black text-2xl font-bold">no ai bot</h2>
    <button onClick={handleCreate} className="space-y-2 font-bold bg-[#111] rounded-md p-2 drop-shadow-lg">Create bot?</button>
  </div>
  )
}

export default ProfileAiCreate