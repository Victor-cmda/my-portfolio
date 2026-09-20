import { createContext, useContext } from "react";
export const MotionPreferences = createContext(false);
export const useMotionPreferences = () => useContext(MotionPreferences);
