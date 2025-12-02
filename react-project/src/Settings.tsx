import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Settings = () => {
  const context = useContext(UserContext);

  return (
    <>
      <div>Hello {context?.name}</div>
      <button
        className="bg-black text-white rounded cursor-pointer px-2 py-1"
        onClick={context?.handleNameReset}
      >
        Reset Button
      </button>
    </>
  );
};

export default Settings;
