import { createContext } from "react";

interface PointerEventContextProps {
  mouseDirection: number | undefined,
};

const PointerEventContext = createContext<PointerEventContextProps>({ mouseDirection: undefined });

export default PointerEventContext;
