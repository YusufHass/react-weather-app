import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import axios from "axios";
import { LocalTimeAndLocations } from "./LocalTimeAndLocation";
import { Forcast } from "./Forcast";
export const SearchWithZipCode = ({
  setQuery,
  timeAndLocation,
  units,
  setUnits,
}) => {
  const [zipCode, setZipCode] = useState("");
  const [state, setStateInfo] = useState("MD");
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Silver Spring");
  const handleZipSearchClick = () => {
    if (zipCode !== "") {
      setQuery({ q: zipCode });
    }
  };

  const handleSearch = async () => {
    try {
      const locationResponse = await axios.get(
        `https://api.zippopotam.us/us/${zipCode}`
      );
      const { country, places } = locationResponse.data;
      const lat = places?.[0]?.["latitude"] || "";
      const lon = places?.[0]?.["longitude"] || "";
      const updateCity = places?.[0]?.["place name"];
      const updateState = places?.[0]?.["state abbreviation"];
      const currState = places?.[0]?.["state"];
      setStateInfo(updateState);
      setCity(updateCity);

      // setCurrState(currState);
      setQuery({ lat, lon });
      // setCurrState({ city, state });
      setError(null);

      // getStateFromZipCode(zipCode);
    } catch (err) {
      setError("Error fetching data. Please check the ZIP code.");
    }
  };

  const handleUnitsChange = (e) => {
    //name is what we give the name of unit as metric or imperial
    //below with the °C or °F icons
    const selectedUnit = e.currentTarget.name;
    //if the current unit is not selected unit then
    //setUnits as the selected unit which convert from
    //degree centigrade to fahrenheit or vice versa
    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };
  return (
    <div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row items-center justify-center spa gap-x-4">
          <input
            type="text"
            className="text-xl font-sans p-2 shadow-x rounded-2xl border-y-2  focus outline-none 
        capitalize placeholder:lowercase"
            placeholder="Search for Zip Code..."
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <UilSearch
            size={25}
            className="text-white cursor-pointer justify-center transition scale-125 ease-out hover:scale-125"
            onClick={handleSearch}
          />
          <div className="flex flex-row w-1/4 items-center justify-center">
            <button
              name="metric"
              // when we hover, the button will be bigger
              className="text-xl text-white font-light transition ease-out hover:scale-125"
              //  when press the ℃, to convert
              onClick={handleUnitsChange}
            >
              ℃
            </button>

            <p className="text-xl text-white mx-1">|</p>
            <button
              name="Imperial"
              // when we hover, the button will be bigger
              className="text-xl text-white font-light transition ease-out hover:scale-125"
              //  when we press the ℉, then it will convert to the unit
              onClick={handleUnitsChange}
            >
              ℉
            </button>
          </div>
        </div>
      </div>
      {error ? (
        <div className="mx-auto max-w-screen-md my-6 mt-4 py-7 px-32 bg-gradient-to-br rounded-xl bg-red-200 h-fit shadow-x shadow-gray-400">
          <p className="text-red-500 text-x">{error}</p>
      </div>):(
      <LocalTimeAndLocations
        timeAndLocation={timeAndLocation}
        updatedState={state}
        updatedCity={city}
        zipCode={zipCode}
  
      />
      )}
    </div>
  );
};
