import React from "react";
import { Icon } from "@iconify/react";
export default function Content({
  date,
  condition,
  icon,
  maxTempC,
  maxTempF,
  minTempC,
  minTempF,
  isGray,
  isActivate,
}) {
  let background = isGray ? "bg-gray" : "bg-white";

  return (
    <div>
      {isActivate && (
        <div className={` h-full flex flex-1  flex-col items-center   font-bold text-[1.5rem] ${background} py-4 px-4`}>
          <p>{date}</p>
          <div className="flex gap-4 ">
            <div className="flex  items-center gap-2">
              <p>{maxTempC}</p>
              <Icon icon="ri:celsius-line" />
            </div>
            <div className="flex  items-center gap-2">
              <p>{minTempC}</p>
              <Icon icon="ri:celsius-line" />
            </div>
          </div>
          <img src={icon} alt="Photo" />
          <p>{condition}</p>
        </div>
      )}

      {!isActivate && (
        <div className={` h-full flex flex-1  flex-col items-center   font-bold text-[1.5rem] ${background} py-4 px-4`}>
          <p>{date}</p>
          <div className="flex gap-4 ">
            <div className="flex  items-center gap-2">
              <p>{maxTempF}</p>
              <Icon icon="mingcute:fahrenheit-line" />
            </div>
            <div className="flex  items-center gap-2">
              <p>{minTempF}</p>
              <Icon icon="mingcute:fahrenheit-line" />
            </div>
          </div>
          <img src={icon} alt="Photo" />
          <p>{condition}</p>
        </div>
      )}
    </div>
  );
}
