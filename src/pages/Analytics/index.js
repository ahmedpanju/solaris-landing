import React, { useState } from "react";
import { toast } from "react-toastify";
import firebase from "firebase/compat/app";

const Analytics = () => {
  const [passwordState, setPasswordState] = useState("");
  const [totalNumberOfLeadsState, setTotalNumberOfLeadsState] = useState(0);

  const handleSubmit = async () => {
    const db = firebase.firestore();
    try {
      if (passwordState === process.env.REACT_APP_ANALYTICS_PASSWORD) {
        await db
          .collection("attendees")
          .get()
          .then((snap) => {
            setTotalNumberOfLeadsState(snap.size);
          });
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again");
    }
  };

  return (
    <div>
      <input
        type="password"
        value={passwordState}
        onChange={(event) => setPasswordState(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {!!totalNumberOfLeadsState && (
        <b>Total Leads: {totalNumberOfLeadsState}</b>
      )}
    </div>
  );
};

export default Analytics;
