import { WContext } from "../context/WContext";
import { useContext } from "react";

export const useWContext = () => {
  const context = useContext(WContext)
  if(!context) {
    throw Error(' useWorkoutContext must be used inside and WContextProvider')
  }
  return context
}