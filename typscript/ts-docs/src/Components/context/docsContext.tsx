import { createContext } from "react";

export type DocsContextType = {
  toggle: boolean;
  handleToggle: () => void;
};

export const docsContext = createContext<DocsContextType>({
  toggle: false,
  handleToggle: () => {},
});
