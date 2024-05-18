import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Profile</h1>
      <form>
        <div className="w-32 h-32">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-full border-8"
          />
        </div>
      </form>
    </div>
  );
}
