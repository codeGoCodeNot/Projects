import { docsContext, type DocsContextType } from "./docsContext";
import { useState, type ReactNode } from "react";

type DocsProviderProps = {
  children: ReactNode;
};

const DocsProvider = ({ children }: DocsProviderProps) => {
  const [toggle, setToggle] = useState(false);

  const value: DocsContextType = {
    toggle,
    handleToggle: () => setToggle((c) => !c),
  };

  return <docsContext.Provider value={value}>{children}</docsContext.Provider>;
};
export default DocsProvider;
