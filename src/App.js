import { useEffect, useState } from "react";
import { Forcast } from "./components/Forcast";
import { LocalTimeAndLocations } from "./components/LocalTimeAndLocation";
import Navigation from "./components/Navigation";
import { SearchWithZipCode } from "./components/SearchWithZipCode";
import { WeatherDetails } from "./components/WeatherDetails";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Link,
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
  const currentLocation = window.location.pathname;

  return (
    <Router>
      <div>
        <div
          className="mx-auto max-w-screen-md my-6 mt-4 py-7 px-32 bg-gradient-to-br rounded-xl bg-violet-200 h-fit shadow-x shadow-gray-400
    flex flex-row w-3-4 justify-center spa gap-x-5"
        >
          <Link to="/" element>
            <h1 className="text-gray-500 text-2xl font-bold">
              Accurate <span className="text-red-500">Weather</span>
            </h1>
          </Link>
          <Navigation />
        </div>
        {weather && (
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <SearchWithZipCode
                    setQuery={setQuery}
                    timeAndLocation={weather}
                    units={units}
                    setUnits={setUnits} 
                  />
                }
              />
              {/* <div classNam="mx-auto max-w-screen-md my-6 mt-4 py-7 px-32 bg-gradient-to-br rounded-xl bg-violet-400 h-fit shadow-x shadow-gray-400"> */}
              \ {/* Conditionally render the /hourly route */}
              <Route
                path="/hourly"
                element={
                  <Forcast title="hourly forecast" items={weather.hourly} weather={weather} />
                }
              />
              <Route
                path="/daily"
                element={
                  <Forcast title="daily forecast" items={weather.daily} weather={weather} />
                }
              />
            </Routes>
          </div>
          // </div>
        )}
      </div>
    </Router>
  );
}

export default App;
