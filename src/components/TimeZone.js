import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TimeZone = ({ timeZoneOffset }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const offset = timeZoneOffset * 60 * 60 * 1000; // Convert hours to milliseconds
      const timeInTimeZone = new Date(new Date().getTime() + offset);

      const hours = timeInTimeZone.getUTCHours();
      const minutes = timeInTimeZone.getUTCMinutes();
      const amOrPm = hours >= 12 ? "PM" : "AM";

      const formattedHours = (hours % 12 || 12).toString().padStart(2, "0"); // Convert to 12-hour format

      const formattedTime = `${formattedHours}:${minutes
        .toString()
        .padStart(2, "0")} ${amOrPm}`;
      setCurrentTime(formattedTime);
    };

    // Update the time initially
    updateCurrentTime();

    // Update the time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [timeZoneOffset]);

  return (
    <div>
      <p className="my-info text-[#a1a1aa]">
        {currentTime} (GMT {timeZoneOffset < 0 ? "-" : "+"}
        {Math.abs(timeZoneOffset).toString().padStart(2, "0")}
        :00)
      </p>
    </div>
  );
};
TimeZone.propTypes = {
  timeZoneOffset: PropTypes.number.isRequired, // Add prop validation
};

export default TimeZone;
