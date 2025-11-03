import { introContext, type IntroContextType } from "./introContext";
import { useState, type ReactNode } from "react";

type IntroProviderProps = {
  children: ReactNode;
};

const IntroProvider = ({ children }: IntroProviderProps) => {
  const [toggle, setToggle] = useState(false);

  const value: IntroContextType = {
    toggle,
    handleToggle: () => setToggle((c) => !c),
  };

  return (
    <introContext.Provider value={value}>{children}</introContext.Provider>
  );
};

export default IntroProvider;
