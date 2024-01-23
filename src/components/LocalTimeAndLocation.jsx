import React, { useState } from "react";
import { WeatherDetails } from "./WeatherDetails";
import { formatToLocalTime } from "./WeatherAPI/FetchWeather";

export const LocalTimeAndLocations = ({
  timeAndLocation,
  updatedState,
  updatedCity,
  zipCode,
}) => {
  const { dt, timezone, name, country } = timeAndLocation;
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="mx-auto max-w-screen-md my-6 mt-4 py-7 px-32 bg-gradient-to-br rounded-xl bg-violet-400 h-fit shadow-x shadow-gray-400 ">
      <div className="flex items-center justify-center my-6">
        {/* //comes from the FetachWeather formating */}
        <p className="text-white text-xl font-extralight">
          {/* //comes from the FetachWeather formating */}
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {state && state === updatedState
            ? `${city}, ${state}`
            : `${updatedCity}, ${updatedState}`}
        </p>
      </div>
      <WeatherDetails timeAndLocation={timeAndLocation} />
    </div>
  );
};
