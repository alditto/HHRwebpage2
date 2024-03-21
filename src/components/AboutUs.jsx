import React from "react";

const AboutUs = () =>{
    return (
    
        <section  style={{ backgroundImage: "url(/imgabout1.jpg)"}} className="min-h-[90vh] grid grid-cols-1 md:grid-cols-8 ">
           <div id="aboutUs" className="md:col-span-10 flex items-center justify-center p-4 xl:p-14">
                <div className="flex flex-col gap-8">
                    <h1 className="text-1xl xl:text-3xl font-bold leading-[3rem] xl:leading-[4rem] text-white text-justify">Die HHR Glasfaser GmbH ist Bauunternehmen, welches sich auf den Ausbau von Glasfasernetzen spezialisiert hat.
Als Teil einer großen, internationalen Gruppe gehören wir zu der Geodesia Gruppe.
Mit einem starken Partner an der Seite sind wir derzeit an einer Vielzahl an Projekten tätig in den Regionen Bayern, Baden-Württemberg und Saarland. In Kürze werden wir ein neues, großes Projekt in der Region Neubrandenburg starten.
Wir befinden uns in einer gesunden Expansion mit einer mittel- bis langfristigen Auftragslage.
                    </h1> 
                    <h1 className="text-1xl xl:text-3xl font-bold leading-[3rem] xl:leading-[4rem] text-white text-justify">Wir, die HHR Glasfaser GmbH sind zwar ein noch junges Unternehmen, welches im August 2023 gegründet worden ist, aber, das Unternehmen wird von erfahrenen Inhabern geführt, die die Branche sehr gut kennen und die damit verbundenen Probleme und Schwierigkeiten erfolgreich meistern. 
Wir sind noch vom "alten Schlag". Kenner der Branche wissen, was das bedeutet und die Bisherigen 
Erfolge geben uns Recht.

                    </h1> 
                </div>
                <div className="flex flex-col  md:flex-row items-center">
                <img src="geodesia.png" alt="Geodesia" />
            </div>
            </div>
            
            
        </section>
    );
};

export default AboutUs;