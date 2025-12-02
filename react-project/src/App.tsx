import Settings from "./Settings";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Settings />
      </UserProvider>
    </>
  );
}

export default App;
