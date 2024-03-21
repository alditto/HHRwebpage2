import React from "react";
import{RiCheckboxBlankCircleFill, RiRssLine} from "react-icons/ri";
 const Top = ()=>{
    return(
        <section  style={{ backgroundImage: "url(/image.jpg)"}} className="min-h-[90vh] grid grid-cols-1 md:grid-cols-8 ">
       
       {/*Text*/}
        <div className="md:col-span-5 flex items-center justify-center p-6 xl:p-16">
            <div className="flex flex-col gap-8">
                <h1 className="text-5xl xl:text-7xl font-bold leading-[3rem] xl:leading-[4rem]">WIR BAUEN {" "}
                    <span className="text-primary py-2 ">GLASFASERNETZE</span>
                </h1>
                
                <p className="text-gray-500 text-2xl leading-[2.5rem]">Wir sind ausgebildete Fachkräfte mit langjähriger Erfahrung</p>
                
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="bg-primary text-white py-2 px-8 rounded-xl text-2xl">
                        Kontakt
                    </button>
                </div>
            </div>
        </div>
        {/*Images */}
        <div className="md:col-span-3 flex items-center justify-center relative">
            <img src="image1.png " className="object-cover xl:-mt-28"/>
            {/*<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-transparent border-[10px] border-primary rounded-full -z-7"></div>*/}
        </div>
        
        </section>
    );
 };

 export default Top;