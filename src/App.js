import { Forcast } from "./components/Forcast";
import { LocalTimeAndLocations } from "./components/LocalTimeAndLocation";
import Navigation from "./components/Navigation";
import { SearchWithZipCode } from "./components/SearchWithZipCode";
import { Title } from "./components/Title";
import { WeatherDetails } from "./components/WeatherDetails";

function App() {
  return (
    <div>
      <div
        className="mx-auto max-w-screen-md my-6 mt-4 py-7 px-32 bg-gradient-to-br rounded-xl bg-violet-200 h-fit shadow-x shadow-gray-400
    flex flex-row w-3-4 justify-center spa gap-x-5"
      >
        <Title />
        <SearchWithZipCode />
        <Navigation />
      </div>
      <div className="mx-auto max-w-screen-md my-6 mt-4 py-7 px-32 bg-gradient-to-br rounded-xl bg-violet-400 h-fit shadow-x shadow-gray-400 ">
        <div>
          <LocalTimeAndLocations />
        </div>
        <div>
          <WeatherDetails />
        </div>
        <div>
          <Forcast title="Hourly Forcast" />
          <Forcast title="Daily Forcast" />
        </div>
      </div>
    </div>
  );
}

export default App;
