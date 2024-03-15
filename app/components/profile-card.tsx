import Image from 'next/image';


interface ProfileCardProps {
  user: any;
}


const UserProfileCard = ({user}: ProfileCardProps) => {



  console.log(user)

  return (
    <div className="w-[100%] md:w-[70%]  bg-white rounded-md shadow-md p-6 text-black">
      <div className="mb-4 flex items-center justify-center  h-full w-full">
       
        <div className='w-[150px] h-[150px] relative rounded-full object-cover mr-4'>
          <Image
            src={user.image || 'https://placekitten.com/150/150'}
            alt="User Profile"
            fill
          />

        </div>

        <div>
          <h2 className="text-xl font-bold">{user.username}</h2>
          <p className="text-gray-500">{user.email}</p>
         {user.metaAccount && <p className="text-gray-500">{user.metaAccount.substring(0, 7)}</p>}
        </div>
      </div>


    </div>
  );
};

export default UserProfileCard;
