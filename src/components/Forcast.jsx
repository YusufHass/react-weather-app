import React from "react";
import { formatToLocalTime, iconUrlFromCode } from "./WeatherAPI/FetchWeather";
export const Forcast = ({ title, items, weather }) => {
  const { dt, timezone, name, country } = weather;
  return (
    <div className="mx-auto max-w-screen-md my-6 mt-4 py-7 px-32 bg-gradient-to-br rounded-xl bg-violet-400 h-fit shadow-x shadow-gray-400 ">
      <div className="flex items-center justify-center my-6">
        {/* //comes from the FetachWeather formating */}
        <p className="text-white text-xl font-extralight">
          {/* //comes from the FetachWeather formating */}
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2"></hr>
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item, index) => (
          <div
            key={index}
            className="felx flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} alt="" />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
