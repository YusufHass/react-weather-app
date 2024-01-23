import { useEffect, useState } from "react";
import { Forcast } from "./components/Forcast";
import { LocalTimeAndLocations } from "./components/LocalTimeAndLocation";
import Navigation from "./components/Navigation";
import { SearchWithZipCode } from "./components/SearchWithZipCode";
import { Title } from "./components/Title";
import { WeatherDetails } from "./components/WeatherDetails";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import GetFormattedWeatherData from "./components/WeatherAPI/FetchWeather";

function App() {
  const [query, setQuery] = useState({ q: "Silver Spring" });
  const [units, setUnits] = useState("imperial");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await GetFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data);
          console.log("weather data", weather);
        }
      );
    };
    fetchWeatherData();
    console.log("Data from comp");
  }, [query, units]);

  return (
    <div>
      <div
        className="mx-auto max-w-screen-md my-6 mt-4 py-7 px-32 bg-gradient-to-br rounded-xl bg-violet-200 h-fit shadow-x shadow-gray-400
    flex flex-row w-3-4 justify-center spa gap-x-5"
      >
        <Title />
        {/* <Navigation /> */}
      </div>
      {weather && (
        <div>
          <SearchWithZipCode setQuery={setQuery} timeAndLocation={weather} />
          <div lassName="mx-auto max-w-screen-md my-6 mt-4 py-7 px-32 bg-gradient-to-br rounded-xl bg-violet-400 h-fit shadow-x shadow-gray-400">
            <Forcast title="hourly forcast" items={weather.hourly} />
            <Forcast title="daily forcast" items={weather.daily} />
          </div>
        </div>
      )}

      {/* <div className="mx-auto max-w-screen-md my-6 mt-4 py-7 px-32 bg-gradient-to-br rounded-xl bg-violet-400 h-fit shadow-x shadow-gray-400 ">
        {/* <div>
          <LocalTimeAndLocations />
        </div> */}
      {/* <div>
          <WeatherDetails weather={weather} />
        </div> 
        <div>
          {/* <Route path="/" element={<WeatherDetails weatherDetailInfo={weather}/>} /> */}
      {/* <Forcast title="Hourly Forecast" />
          <Forcast title="Daily Forecast" />
        </div>
      </div> */}
    </div>
  );
}

export default App;
