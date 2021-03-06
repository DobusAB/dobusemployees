import React, { Component } from 'react';
import Memories from '../../Components/Firstmemory';
import Skills from '../../Components/Skills';
import What from '../../Components/What';
import Footer from '../../Components/Footer';

class Viman extends Component {

    render() {
        let roleclass = "developer";
        let image = "/viman.png";
        let name = "Truong Vi Man";
        let role = "API- & Apputvecklare på Dobus";
        let how = "Jag är en utvecklare som har arbetat med programmering inom olika områden. Mitt huvudfokus på jobbet är utveckling av system- och mobilapplikationer.";
        let ido = "En programmerare som arbetar lika bra individuellt som i lag. Älskar att lösa problem och ta mig an nya utmaningar. Som konsult arbetar man med nya projekt ständigt, vilket jag tycker är kul. Det jag arbetar med främst är att utveckla Android- och iOS-applikationer tillsammans med RESTful APIs. Jag gör alltid mitt bästa för att få våra kunder nöjda.";
        let experience = "Jag har en högskoleingenjörsexamen i datorsystemteknik. Utförde också ett utvecklingsprojekt på Högskolan i Halmstad som utgick ifrån att det inom vården fanns ett integritetsproblem vid användning av övervakningskameror, eftersom patienter känner sig iakttagna konstant. Resultatet blev en Windows- samt Android-applikation som kunde styra en IP-webbkamera. Till IP-kameran lades ett elektroniskt lock som applikationerna kunde styra över nätet. Locket fälldes upp vid användning av kameran och när kameran inte användes täckte den för kamerans lins.";
        //let shortMemory = '”Mitt första minne av Husqvarna är en orange gräsklippare som mina släktingar hade för många år sedan. När jag var yngre brukade jag hjälpa dem att klippa gräset.”';
        let shortMemory = '”Välj ett jobb som du älskar och du kommer aldrig att behöva arbeta en dag i hela ditt liv."';
        let longMemory = (
            <div> <a href="mailto:viman@dobus.se">viman@dobus.se</a> / <a href="tel:0738300505">073 830 05 05</a> </div>
        )
        
        let experienceyear = "(2011—2017)";

        const skills = ["iOS", "Swift", "Android", "Java", "ASP.NET MVC", "C#", "Laravel", "PHP", "HTML", "CSS"];
        return (
            <div className="emplooyes">
                <div className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                
                            <Memories memory={shortMemory} 
                                    image={image}
                                    roleclass={roleclass}
                                    name={name}
                            />
                        </div>
                    </div>
                </div>
                <Skills name={name} 
                            role={role}
                            roleclass={roleclass}
                            image={image}
                            skills={skills}
                    />
                    <What ido={ido} 
                        how={how}
                        experience={experience}
                        experienceyear={experienceyear}
                        roleclass={roleclass}
                    />
                <Footer memory={longMemory}
                        name={name}
                        role={role}
                        image={image}
                        roleclass={roleclass}
                />
            </div>
        );
    }
}

export default Viman;