import React, { useState, useEffect } from "react";
import Cloud from "../icons/011-cloud.png";
import TodayDate from "./TodayDate";
import MaxTemp from "../icons/sun.png";
import Wind from "../icons/017-wind.png";
import Pressure from "../icons/indicator.png";
import Humidity from "../icons/water.png";
import MinTemp from "../icons/climate.png";
import OverCast from "../icons/overcast.png";
import Haze from "../icons/haze.png";
import Moderate from "../icons/moderate.png";
import Scattered from "../icons/scattered.png";
import Light from "../icons/light.png";
import BrokenCloud from "../icons/broken-cloud.png";
import FeelLike from "../icons/feel-like.png";

const MainCard = () => {
  const [city, setCity] = useState("");
  const [cityInfo, setCityInfo] = useState(null);
  const [Place, setPlace] = useState("Place");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiKey = process.env.REACT_APP_API_KEY;
    const cityData = city;

    setPlace(cityData);
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        setCityInfo(data);
        setError(null);
      } else {
        setError("Error fetching weather data");
        alert("Please Enter a Valid City Name");
      }
    } catch (error) {
      setError("Error fetching weather data");
    }
    setLoading(false);
  };

  useEffect(() => {
    // Clear city information and error when city changes
    setCityInfo(null);
    setError(null);
  }, [city]);

  return (
    <>
      {/* <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl m-auto bg-white mt-4 border-2"> */}
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl mx-auto bg-white mt-4 border-2">
        <div className="px-4 py-3">
          <form className="w-full max-w-sm mt-5">
            <div className="flex items-center">
              <input
                className="bg-white border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                id="inline-full-name"
                type="text"
                placeholder="Enter City Name"
                value={city}
                onChange={handleInputChange}
              />
              <button
                className="bg-purple-400 ml-2 p-2 rounded px-4 hover:bg-purple-500"
                onClick={handleSubmit}
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          {cityInfo ? (
            <>
              {cityInfo.weather[0].description === "overcast clouds" ? (
                <img src={OverCast} alt="OverCast" className="w-50 h-40" />
              ) : cityInfo.weather[0].description === "haze" ? (
                <img src={Haze} alt="Haze" className="w-50 h-40" />
              ) : cityInfo.weather[0].description === "moderate rain" ? (
                <img src={Moderate} alt="Moderate" className="w-50 h-40" />
              ) : cityInfo.weather[0].description === "scattered clouds" ? (
                <img src={Scattered} alt="Scattered" className="w-50 h-40" />
              ) : cityInfo.weather[0].description === "light rain" ? (
                <img src={Light} alt="Light" className="w-50 h-40" />
              ) : cityInfo.weather[0].description === "broken clouds" ? (
                <img
                  src={BrokenCloud}
                  alt="BrokenCloud"
                  className="w-50 h-40"
                />
              ) : (
                <img src={Cloud} alt="Cloudy" className="w-50 h-40" />
              )}
            </>
          ) : (
            <img src={Cloud} alt="Cloudy" className="w-50 h-40" />
          )}
        </div>

        <div className="flex items-center flex-col">
          {cityInfo ? (
            <>
              <p>{cityInfo.weather[0].description}</p>
              <p className="text-2xl font-semibold">{cityInfo.main.temp} °C</p>
            </>
          ) : error ? (
            <div className="ml-2 text-red-500">{error}</div>
          ) : (
            <>
              <p className="text-xl font-semibold">It's a lovely day</p>
              <p className="text-lg font-semibold">0 °C</p>
            </>
          )}
        </div>

        <div className="flex items-center justify-between mt-5 mb-2 ml-2">
          <div className="ml-2">
            {cityInfo ? (
              <h1 className="text-md text-green-500">{Place.toUpperCase()}</h1>
            ) : null}
          </div>
          <div className="mr-2 text-blue-500">
            <TodayDate />
          </div>
        </div>
      </div>
      {/* smaller Card */}
      <div className="flex flex-wrap justify-center space-x-2 mt-2">
        <div className="h-40 w-50 rounded-xl shadow-lg m-1 flex flex-col items-center p-5 bg-white ">
          <img src={MaxTemp} alt="Max-Temp" className="w-20 h-20" />
          <span className="text-center text-lg">Max_Temp</span>
          {cityInfo ? (
            <>
              <p>{cityInfo.main.temp_max} °C</p>
            </>
          ) : null}
        </div>

        <div className="h-40 w-50 rounded-xl shadow-lg m-1 flex flex-col items-center p-5 bg-white">
          <img src={MinTemp} alt="Max-Temp" className="w-20 h-20" />
          <span className="text-center text-lg">Min_Temp</span>
          {cityInfo ? (
            <>
              <p>{cityInfo.main.temp_min} °C</p>
            </>
          ) : null}
        </div>

        <div className="h-40 w-50 rounded-xl shadow-lg m-1 flex flex-col items-center p-5 bg-white">
          <img src={Humidity} alt="Max-Temp" className="w-20 h-20" />
          <span className="text-center text-lg">Humidity</span>
          {cityInfo ? (
            <>
              <p>{cityInfo.main.humidity}%</p>
            </>
          ) : null}
        </div>

        <div className="h-40 w-50 rounded-xl shadow-lg m-1 flex flex-col items-center p-5 bg-white">
          <img src={Pressure} alt="Max-Temp" className="w-20 h-20" />
          <span className="text-center text-lg">Pressure</span>
          {cityInfo ? (
            <>
              <p>{cityInfo.main.pressure} KPa</p>
            </>
          ) : null}
        </div>

        <div className="h-40 w-50 rounded-xl shadow-lg m-1 flex flex-col items-center p-5 bg-white">
          <img src={Wind} alt="Wind" className="w-20 h-20" />
          <span className="text-center text-lg">Wind</span>
          {cityInfo ? (
            <>
              <p>{cityInfo.wind.speed} km/h</p>
            </>
          ) : null}
        </div>
        <div className="h-40 w-50 rounded-xl shadow-lg m-1 flex flex-col items-center p-5 bg-white">
          <img src={FeelLike} alt="FeelLike" className="w-20 h-20" />
          <span className="text-center text-lg">Feel-Like</span>
          {cityInfo ? (
            <>
              <p>{cityInfo.main.feels_like} °C</p>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MainCard;




