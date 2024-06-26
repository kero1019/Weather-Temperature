import React from "react";

export default function TempButton({ children ,   isActivate , setActivate }) {

  return <button onClick={()=> setActivate( prevStatus=> !prevStatus)} className={`w-8 font-bold ${isActivate ? "bg-[gray]" : "bg-white"} `} >{children}</button>;
}
