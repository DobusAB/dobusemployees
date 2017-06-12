import React, { Component } from 'react';
import Memories from '../../Components/Firstmemory';
import Skills from '../../Components/Skills';
import What from '../../Components/What';
import Footer from '../../Components/Footer';

class Johan extends Component {

    render() {
        let roleclass = "developer";
        let image = "/johan.png";
        let name = "Johan Sveningsson";
        let role = "VD & Utvecklare på Dobus";
        let how = "VD och grundare med en passion för allt som har att göra med utveckling. Påbörjade min karriär med datavisualiserings till att bygga Appar & API:er. Man kan säga att jag är en full-stack utvecklare, med andra ord har jag koll på mycket ;) ";
        let ido = "Jag är lösningsorienterad och oerhört social och ÄLSKAR att driva företag, hade inte klarat mig utan det. Med en bakgrund i aplin skidåkning och även golf har jag lärt mig att man kommer långt med sitt tålamod. VD och grundare med en passion för allt som har att göra med att driva företag.";
        let experience = "Påbörjade min IT karriär när jag gick på gymnasiet, då jag drev UF företag och blev 2a på bästa webb, påbörjade sedan en utbildning i Halmstad Informatik programmet med inriktning webb. Programmerade extremt mycket på min lediga tid och fick snabbt jobb efter 6 månader av studier. Jag har drivit Företaget Dobus nu i 2.5 år. Har även tävlat i alpint och spelar gärna golf (när vädret behagar)";
        let shortMemory = '”När jag bodde hemma var det alltid jag som fick sköta gräsklippningen, något som inte alltid var så uppskattat. Men sen kom Automower.”';
        let longMemory = '”Det bästa med att driva och arbeta på Dobus är att få driva projekt framåt och att få möjligheten att digitalisera världen och framförallt företag."';
        let experienceyear = "(2013—2017)";

        const skills = ["Javascript", "Swift 3.0", "Sketch"];
        return (
            <div className="emplooyes">
                <div className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                
                            <Memories memory={shortMemory} 
                                    image={image}
                                    roleclass={roleclass}
                            />
                        </div>
                    </div>
                </div>
                <div className="container">
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
                </div>
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

export default Johan;