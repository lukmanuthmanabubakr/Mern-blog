import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col cursor-pointer shadow-md overflow-hidden rounded-full">
        <div className="w-32 h-32 self-center">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-full border-8 object-cover border-[lightgray]"
          />
        </div>
      </form>
    </div>
  );
}
