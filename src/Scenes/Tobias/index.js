import React, { Component } from 'react';
import Memories from '../../Components/Firstmemory';
import Skills from '../../Components/Skills';
import What from '../../Components/What';
import Footer from '../../Components/Footer';

class Tobias extends Component {

    render() {
        let roleclass = "web";
        let image = "/tobias.png";
        let name = "Tobias Nilsson";
        let role = "API & Apputvecklare på Dobus";
        let how = "Att vara rastlös är det värsta jag vet och därför ser jag alltid till att jobba flitigt med programmeringen både inom webbutveckling och Android utveckling. När jag har ett problem framför mig är jag inte den som ger upp utan jag tar tjuren i hornen.";
        let ido = "Bakom ridåerna finner ni mig då min utmärkande egenskap är backend-utveckling, då jag lägger mina vakna timmar till att bygga bra och skalbara API:er. Jag har även kunskaper för att kunna skapa Android appar.";
        let experience = "Högskoleingenjör inom datateknik på Lunds Tekniska Högskola och Serveradministration i bla. Linux. Studerade även ett halvår i Kina som utbytesstudent då jag fick lära mig allt från kinesiska till en annan kultur. Jag har även varit med i landslaget i rugby.";
        //let shortMemory = '”Mitt första minne med Husqvarna var när jag fick hjälpa till med ogräset och då använde vi en grästrimmer. Trots bra verktyg kunde väl insatsen ha varit bättre”';
        let shortMemory = '”读万卷书不如行万里路" ("Reading ten thousand books is not as useful as travelling ten thousand miles.")';
        let experienceyear = "(2013—2017)";

         let longMemory = (
            <div> <a href="mailto:tobias@dobus.se">tobias@dobus.se</a> / <a href="tel:0738308980">073 830 89 80</a> </div>
        )

        const skills = ["Javascript", "HTML", "CSS", "Laravel", "C#", "JAVA", "Android", "Android studio", "Linux", "Servers"];
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

export default Tobias;