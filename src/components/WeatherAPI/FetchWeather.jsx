
import axios from "axios";
import { DateTime } from "luxon";
import { useState } from "react";

const BASE_URL= "https://api.openweathermap.org/data/2.5";
const API_KEY = "e9b4da6d7e527138f4a4cc8608048631";
// export const getStateFromZipCode = async (zipCode) => {
//     // const locationResponse = await axios.get(
//     //   `https://api.zippopotam.us/us/${zipCode}`
//     // );
//     // const {country,places } = locationResponse.data;
//     // const currState=places?.[0]?.['state abbreviation'];
  
  
//   //   const zipCodeUrl = `https://api.zippopotam.us/us//${zipCode}`;
//   //   const zipCodeResponse = await fetch(zipCodeUrl);
//   //   const zipCodeData = await zipCodeResponse.json();
//   //   const city=zipCodeData.places?.[0]?.['place name'];
//   //   return zipCodeData.places?.[0]?.['state abbreviation'];
// }

const getWeatherData = (infoType, searchParam) => {
  const url = new URL(
    BASE_URL + "/" + infoType
  );
  url.search = new URLSearchParams({ ...searchParam, appid: API_KEY });
  // console.log(url);
  //testing
  return fetch(url).then((res) => res.json()); //.then((data)=>data)
};

const FormateCurrentWeather = (data) => {

  // const[state, setSetate]= useState();
  // console.log("Unformatted all data", data);
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  //main is renamed to details
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    weather,
    speed,
    details,
    icon,
  };
};
const FormatForecastWeather = (data) => {
  // console.log("Format daily and hourly", data);
  let { timezone, daily, hourly } = data;
//returns the daily forcast
  daily = daily.slice(1, 6).map((d) => {
    return {
      //this retuns the daily forecase. ccc represents days from Monday-Sunday
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });
  //hourly returns the hourly forcase
  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });
  //retuning the timezone,daily and hourly defined above
  return { timezone, daily, hourly };
};
//searchParams is the input that we need to pass to the function
//which can be city or the zipcode
const GetFormattedWeatherData = async (searchParams) => {
  // Fetch state information based on ZIP code
  // console.log("Params state",searchParams)
  

  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(FormateCurrentWeather);

  console.log("The params is ",searchParams)
  //distructuring lat and lon from the formattedCurrentWeather above data
  const { lat, lon } = formattedCurrentWeather;
  // console.log("formatted_Current_Weather", formattedCurrentWeather);

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    //retuns all except current weather,minutly and alerts
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(FormatForecastWeather);
  //retuns the formated daily forecast
  // console.log("formatted_Forecast_Weather", formattedForecastWeather);
   
  //testing the formatted data displaying
  // return { ...formattedCurrentWeather, ...formattedForecastWeather, state};
  return { ...formattedCurrentWeather, ...formattedForecastWeather};
};

const formatToLocalTime = (
  second,
  zone,
  //cccc-Monday-sunday, dd-day, LLL-January-December, yyyy-year, hh-hour, mm-minute a-am/pm
  //formating using a luxon
  //General UI formate is Monday, Jan 15 2024 | Local time:12:20 PM
  format = "cccc, LLL dd yyyy'  |  Local time: 'hh:mm a"
) => DateTime.fromSeconds(second).setZone(zone).toFormat(format);

//this returns the icon based on the weather conditions
const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export { formatToLocalTime, iconUrlFromCode };
//testing theformate in the App.js
export default GetFormattedWeatherData;
