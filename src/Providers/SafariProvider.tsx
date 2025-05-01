import {
  createContext,
  Dispatch,
  FC,
  memo,
  SetStateAction,
  use,
  useContext,
  useMemo,
  useState,
} from "react";
import { Tour } from "../types/tours";

interface ProviderContextType {
  tours: Tour[];
  setTours: Dispatch<SetStateAction<Tour[]>>;
  activeTour: Tour | null;
  setActiveTour: Dispatch<SetStateAction<Tour | null>>;
}

const AppContext = createContext<ProviderContextType>(
  {} as ProviderContextType
);

export const SafariProvider = ({ children }) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [activeTour, setActiveTour] = useState<Tour | null>(null);

  const value = useMemo(
    () => ({
      tours,
      setTours,
      activeTour,
      setActiveTour,
    }),
    [tours, activeTour]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useSafariContext = () => useContext(AppContext);
