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
  const [closeButtonDisabledState, setClosedButtonDisabledState] = useState(
    false
  );

  return (
    <AttendeesContext.Provider
      value={{
        currentScreenState,
        setCurrentScreenState,
        currentAttendeeIdState,
        setCurrentAttendeeIdState,
        SCREENS,
        closeButtonDisabledState,
        setClosedButtonDisabledState,
      }}
    >
      {children}
    </AttendeesContext.Provider>
  );
};

export default AttendeesProvider;
