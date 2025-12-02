import { createContext, useState, type ReactNode } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<{
  name: string;
  handleNameReset: () => void;
} | null>(null);
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("Johnsen Berdin");
  const handleNameReset = () => setName("");

  return (
    <UserContext value={{ name, handleNameReset }}>{children}</UserContext>
  );
};
