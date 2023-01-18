import React, { useState, useEffect } from "react";
import { Flex } from "rebass";
import moment from "moment";

const Countdown = () => {
  const [countdownDataState, setCountdownDataState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const futureDate = moment("January 29, 2023 00:19:00 GMT+08:00");

  setInterval(() => {
    const currentDate = moment();
    const timeDifference = futureDate.diff(currentDate);

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setCountdownDataState({
      days,
      hours,
      minutes,
      seconds,
    });
  }, 1000);

  return (
    <Flex
      alignItems="center"
      style={{
        textAlign: "center",
        color: "white",
        fontFamily: `"Roboto", sans-serif`,
        letterSpacing: "3px",
      }}
    >
      <span>
        <b>Our Next Event:</b>
        {` ${countdownDataState.days} Days ${countdownDataState.hours} Hours ${countdownDataState.minutes} Minutes ${countdownDataState.seconds} Seconds`}
      </span>
    </Flex>
  );
};

export default Countdown;
