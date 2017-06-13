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
        let shortMemory = '”När jag bodde hemma var det alltid jag som fick sköta gräsklippningen, något som inte alltid var så uppskattat. Men sen kom Automower.”';
        let longMemory = '”读万卷书不如行万里路 [讀萬卷書不如行萬里路" ("Reading ten thousand books is not as useful as travelling ten thousand miles.")';
        let experienceyear = "(2012—2017)";

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