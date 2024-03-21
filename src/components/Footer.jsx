import React from "react";
import { RiFacebookBoxLine, RiFacebookLine, RiInstagramLine, RiLinkedinBoxFill, RiLinkedinLine } from "react-icons/ri";

const Footer =()=>{
return (
    <footer  className="bg-primary p-8 xl:p-20">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray 500 pb-8">
            <img src="logoHHR.png" className="relative"></img>
        
           <nav className="flex items-center gap-4">
                
                    <a href="https://www.instagram.com/hhrglasfaser" className="block text-4xl text-white p-2 rounded-full"><RiInstagramLine/></a>
                    <a href="https://www.facebook.com/hhrglasfaser" className="block text-4xl text-white p-2 rounded-full"><RiFacebookBoxLine/></a>
                    <a href="https://www.linkedin.com/company/99092135" className="block text-4xl text-white p-2 rounded-full"><RiLinkedinBoxFill/></a>
            </nav>
        </div>
        <div className="mt-10">
            <p className="text-gray-300 text-center">HHR Glasfaser GmbH. 2024 - Copyright</p>
        </div>
    </footer>

    );
};

export default Footer;