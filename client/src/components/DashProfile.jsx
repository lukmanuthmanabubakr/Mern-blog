import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector(state => state.user);
  return (
    <div>
      <h1>Profile</h1>
      <form>
        <img src={currentUser.profilePicture} alt="user" className="rounded-full"/>
      </form>
    </div>
  );
}
