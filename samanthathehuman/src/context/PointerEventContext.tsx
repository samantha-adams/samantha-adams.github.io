import { createContext } from "react";

interface PointerEventContextProps {
  mouseAngleRef: React.RefObject<number | undefined>,
};

const PointerEventContext = createContext<PointerEventContextProps>({ mouseAngleRef: { current: undefined } });

export default PointerEventContext;
