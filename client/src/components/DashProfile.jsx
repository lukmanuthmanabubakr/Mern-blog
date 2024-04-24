import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector(state => state.user);
  return (
    <div>
      <h1>profile</h1>
      <form>
      <div className="">

      </div>
        <img src={currentUser.profilePicture} alt="user" className="rounded-full"/>
      </form>
    </div>
  );
}
