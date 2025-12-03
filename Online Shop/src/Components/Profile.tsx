import { Navigate, useNavigate } from "react-router-dom";

type ProfileProps = {
  user: { username: string } | null;
  onUserLogout: () => void;
};

const Profile = ({ user, onUserLogout }: ProfileProps) => {
  const navigate = useNavigate();

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="profile-wrapper">
      <title>Profile | SuperM</title>
      <h1>Profile</h1>
      <p className="text-dimmed">
        You are logged in as <strong>{user?.username}</strong>.
      </p>
      <div className="profile-buttons">
        <input
          type="button"
          value="Logout"
          className="btn"
          onClick={() => {
            onUserLogout();
            navigate("/login");
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
