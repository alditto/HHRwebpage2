import React from "react";

const Service = () => {
 return (
    <section  style={{ backgroundImage: "url(/image.jpg)"}}>
        <div id="service" className="p-8 xl:p-20">
            <div className="mb-8">
                <h1 className="text-[40px] font-bold">Service</h1>
                    <p className="text-xl text-gray-500">
                        Unser Leistungsportfolio umfasst das gesamte Spektrum des Glasfaserausbau. 
                        Beginnend von der Planung bis hin zum aktivierten Kunden.
                    </p>
            </div>
            {/* Servicios*/}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                    <img src="service4.jpg" className=" w-full h-[500px] rounded-3xl"/>
                    <h3 className="text-2xl font-bold text-gray-500">Design, Bauvorhaben</h3>
                    <p className="text-justify">Wir entwerfen unsere Ideen und legen den geeigneten Verlauf der Leitungen fest, 
                    um möglichst wenig Abfall zu produzieren und die Umwelt zu schonen.
                    </p>
                    <p className="text-justify">Das Ingenieurwesen ist ein grundlegender Bestandteil, 
                        um alle Situationen, die vor Ort entstehen, zu beherrschen,
                        Unser Personal ist gut ausgebildet und verfügt über die notwendigen Mittel, um die Ziele zu erreichen.
                    </p>
                    
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4">
                        <img src="service1.jpg" className="w-full h-[500px] object-cover rounded-3xl"/>
                        <h3 className="text-2xl font-bold text-gray-500 ">Unser erstklassiges</h3>
                        <p className="text-justify">Erfahrenes und hochmotiviertes Team von derzeit über 30 Mitarbeitern führen die Projekte optimal strukturiert zielsicher zum Erfolg. 
                            Durch permanente Schulungen halten wir unsere Mitarbeiter immer Up to Date.
                        </p>                   
                    </div>
                
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        <div className="flex flex-col gap-4">
                            <img src="service3.jpg" className="w-full h-[500px]  rounded-3xl"/>
                            <h3 className="text-2xl font-bold text-gray-500 ">Bereitstellung von Materialien</h3>
                            <p className="text-justify">Unsere hohen Standards für die Verwendung von Materialien, die Zuverlässigkeit und Langlebigkeit garantieren, sind das Wichtigste für das Projekt, 
                                um die Garantie für jeden Kunden zu haben, der unseren Service in Anspruch nimmt.
                            </p>                   
                        </div>
                 </div>       
                </div>
            </div>
        </div>
    </section>
 );
};

export default Service;