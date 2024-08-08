import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>
      <h1>ProfilePage</h1>
      <p>Username : {username}</p>
    </div>
  );
};

export default ProfilePage;
