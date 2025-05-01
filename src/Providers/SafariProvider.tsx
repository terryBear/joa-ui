import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Tour } from "../types/tours";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGmS_dk5RTo5bkYG4Z7tTTdvBsBQNLhPE",
  authDomain: "dev-joasafaris.firebaseapp.com",
  projectId: "dev-joasafaris",
  storageBucket: "dev-joasafaris.firebasestorage.app",
  messagingSenderId: "499230620448",
  appId: "1:499230620448:web:b87b4ad7bd761259baf545",
  measurementId: "G-WBTW3XMGNX",
};

interface ProviderContextType {
  tours: Tour[];
  setTours: Dispatch<SetStateAction<Tour[]>>;
  activeTour: Tour | null;
  setActiveTour: Dispatch<SetStateAction<Tour | null>>;
}

const AppContext = createContext<ProviderContextType>(
  {} as ProviderContextType
);

interface SafariProviderProps {
  children: React.ReactNode;
}

export const SafariProvider: FC<SafariProviderProps> = ({ children }) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [activeTour, setActiveTour] = useState<Tour | null>(null);

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    console.log("Firebase initialized", analytics);
  }, []);

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
