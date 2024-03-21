import React, {useState} from "react";
import {RiMenu3Fill,RiCloseLine,} from "react-icons/ri";
const Header = ()=>{
    const[showMenu, setShowMenu]=useState(false);
    return(
        <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
            
            <div className="xk:w-1/6 text-center -mt-4">
                
                <a href="#" className="text-2xl font-bold relative p-1 bg-white">HHR</a>
                <img src="logoHHR.png" className="relative"></img>
            </div>
            
            <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 
                            flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}>
                            
                <a href="#" className="">Startseite</a>
                <a href="#aboutUs" className="">Über uns</a>
                <a href="#service" className="">Service</a>
                <a href="#kontakt" className="">Kontakt</a>
            </nav>
            
            <button  onClick={()=> setShowMenu(!showMenu)} className="xl:hidden text-2xl p-2" >{showMenu ? <RiCloseLine/>:<RiMenu3Fill/>}</button>
            
        </header>
    );

};
export default Header;