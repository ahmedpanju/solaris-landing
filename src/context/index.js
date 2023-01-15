import { createContext, useState } from "react";

export const AttendeesContext = createContext();

const SCREENS = {
  BASIC: "BASIC",
  PAYMENT: "PAYMENT",
  MORE_INFO: "MORE_INFO",
  THANK_YOU: "THANK_YOU",
};

const AttendeesProvider = ({ children }) => {
  const [currentScreenState, setCurrentScreenState] = useState(SCREENS.BASIC);
  const [currentAttendeeIdState, setCurrentAttendeeIdState] = useState("");

  return (
    <AttendeesContext.Provider
      value={{
        currentScreenState,
        setCurrentScreenState,
        currentAttendeeIdState,
        setCurrentAttendeeIdState,
        SCREENS,
      }}
    >
      {children}
    </AttendeesContext.Provider>
  );
};

export default AttendeesProvider;
