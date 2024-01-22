import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
export const SearchWithZipCode = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-row items-center justify-center spa gap-x-4">
        <input
          type="text"
          className="text-xl font-sans p-2 shadow-x rounded-2xl border-y-2  focus outline-none 
        capitalize placeholder:lowercase"
          placeholder="Search for Zip Code..."
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer justify-center transition scale-125 ease-out hover:scale-125"
        />
        <div className="flex flex-row w-1/4 items-center justify-center">
          <button
            name="metric"
            // when we hover, the button will be bigger
            className="text-xl text-white font-light transition ease-out hover:scale-125"
            //  when we press the ℃, then it will convert to the unit
          >
            ℃
          </button>

          <p className="text-xl text-white mx-1">|</p>
          <button
            name="Imperial"
            // when we hover, the button will be bigger
            className="text-xl text-white font-light transition ease-out hover:scale-125"
            //  when we press the ℉, then it will convert to the unit
          >
            ℉
          </button>
        </div>
      </div>
    </div>
  );
};
