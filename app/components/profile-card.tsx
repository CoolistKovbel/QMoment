import Image from 'next/image';


interface ProfileCardProps {
  user: any;
}


const UserProfileCard = ({user}: ProfileCardProps) => {


  return (
    <div className="max-w-[400px] bg-white rounded-md shadow-md p-6 text-black">
      <div className="mb-4 flex items-center">
        <Image
          src={user.image || 'https://placekitten.com/150/150'}
          alt="User Profile"
          width={150}
          height={150}
          className="rounded-full object-cover mr-4"
        />
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
