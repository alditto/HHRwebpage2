import React from "react";

import { RiMailFill } from "react-icons/ri";
const Kontakt = ()=>{
   return(
    <div id="kontakt" className="grid grid-cols-1 md:grid-cols-2 p-20">
        <div className="flex flex-col gap-4">
            <h1 className=" text-[30px] font-bold">Auf der Such nach neuen Kolleginnen/Kollegen.</h1>
            <p className=" text-[20px] text-gray-500">
                Interessiert ? Dann freuen wir uns auf ein erstes Kennenlernen.
            </p>
            <form className="w-full">
                <div className="relative">
                    <RiMailFill className=" absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl"/>
                    <input type="text" className="w-full bg-gray-200 py-4 pl-10 pr-36 rounded-xl outline-none " placeholder=" E-mail"/>
                    <button type="submit" className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2">Senden</button>

                </div>
            </form>
        </div>
    </div>
    
   ); 

};

export default Kontakt;