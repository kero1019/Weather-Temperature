import React, { act } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { Icon } from "@iconify/react";
function App() {
  const [activate, setActivate] = React.useState(true);
  const [darkMood, setDarkMood] = React.useState(true);
  const [weatherData, setWeatherData] = React.useState(null);
  // useEffect ot fetch data
  React.useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=80d6a359426e4a70ac3200449241906 &q=6 october&days=3&aqi=no&alerts=no",
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, []);
  // Function to get day
  function handleDay(str) {
    let today = new Date(str);
    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = daysOfWeek[today.getDay()];
    return day;
  }
  return (
    <div
      className={`${
        darkMood ? "bg-background" : "bg-[#2e2e2e]"
      } min-h-screen flex items-center justify-center`}
    >
      {weatherData === null ? (
        <span className="loader"></span>
      ) : (
        <div className="p-4 max-w-full">
          <Header
            city={weatherData.location.name}
            country={weatherData.location.country}
            setActivate={setActivate}
            isActivate={activate}
            darkMood={darkMood}
            setDarkmood={setDarkMood}
          />
          <div className="">
            <div className=" bg-white text-[1.5rem] flex gap-2 items-center justify-center">
              {activate ? (
                <p className="font-bold">
                  Current: {weatherData.current.temp_c}
                </p>
              ) : (
                <p className="font-bold">
                  Current: {weatherData.current.temp_f}
                </p>
              )}
              <Icon icon="ri:celsius-line" />
            </div>
            <p className="w-full h-1 bg-gray"></p>
          </div>
          <div className="content flex flex-wrap h-full">
            {weatherData.forecast.forecastday.map((data, index) => {
              return (
                <Content
                  key={index}
                  date={handleDay(data.date)}
                  condition={data.day.condition.text}
                  icon={data.day.condition.icon}
                  maxTempC={data.day.maxtemp_c}
                  maxTempF={data.day.maxtemp_f}
                  minTempC={data.day.mintemp_c}
                  isGray={index % 2 !== 0}
                  minTempF={data.day.mintemp_f}
                  isActivate={activate}
                />
              );
            })}
          </div>
          <Footer lastUpdate={weatherData.current.last_updated} />
        </div>
      )}
    </div>
  );
}

export default App;
