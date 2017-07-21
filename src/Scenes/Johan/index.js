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
        let how = "Påbörjade min karriär med datavisualisering för att sedan gå över till att bygga Appar & API:er. Numera kan man dock säga att jag är en full stack-utvecklare som har en väldigt bred koll när det kommer till programmering och utveckling av nya tjänster!";
        let ido = "Jag är lösningsorienterad, oerhört social och jag ÄLSKAR verkligen att driva företag. Hade inte klarat mig utan det. Genom min bakgrund inom alpin skidåkning och golf har jag lärt mig att man kommer långt med sitt tålamod. I övrigt är jag en VD och grundare med en passion för allt som har att göra med att driva företag.";
        let experience = "Påbörjade min IT karriär när jag gick på gymnasiet, då jag drev ett UF-företag och blev 2:a plats på bästa webb. Därefter påbörjades sedan en utbildning i Halmstad på Informatikprogrammet med inriktning Webb. Det blev extremt mycket programmering på min lediga tid och jag fick snabbt jobb efter ca. sex månader av studier. Jag har nu drivit Dobus i ungefär två och ett halvt år.";
        // let shortMemory = '"När jag var liten fick jag hänga med min morfar ut till skogen i Småland, vi skulle hugga träd. Då fick jag för första gången hålla i en motorsåg från Husqvarna. "';
        let shortMemory = '"Det bästa med att driva och arbeta på Dobus är chansen att få driva projekt framåt och att få möjligheten att digitalisera världen (och framförallt företag.)"';
        //let longMemory = '”Det bästa med att driva och arbeta på Dobus är chansen att få driva projekt framåt och att få möjligheten att digitalisera världen (och framförallt företag.)"';
        let longMemory = (
            <div> <a href="mailto:johan@dobus.se">johan@dobus.se</a> / <a href="tel:0738308980">073 830 89 80</a> </div>
        )
        let experienceyear = "(2012—2017)";

        const skills = ["Javascript", "Swift 3.0", "Sketch", "PHP", "React", "vue.js", "Laravel", "IOS", "Android"];
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

export default Johan;