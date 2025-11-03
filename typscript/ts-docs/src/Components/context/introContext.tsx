import { createContext } from "react";

export type IntroContextType = {
  toggle: boolean;
  handleToggle: () => void;
};

export const introContext = createContext<IntroContextType>({
  toggle: false,
  handleToggle: () => {},
});
