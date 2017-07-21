import React, { Component } from 'react';
import Memories from '../../Components/Firstmemory';
import Skills from '../../Components/Skills';
import What from '../../Components/What';
import Footer from '../../Components/Footer';

class Tim extends Component {

    render() {
        let roleclass = "ux";
        let image = "/tim.png";
        let name = "Tim Gabrielsson";
        let role = "Interaktionsdesigner på Dobus";
        let how = "Den stora delen av kunskapen ligger inom ramarna av interaktionsdesign, men på senare tid har det även tillkommit mycket fokus på programmering (och främst  då iOS-utveckling, som tidigare nämnt). Min uppgift i projekt brukar vara att leda våra så kallade Design sprints, utveckla koncept (hela vägen från snabba skisser till slutgiltiga, högdetaljerade koncept) och därefter sköta animationer och designspecifik programmering.";
        let ido = "Programmerande interaktionsdesigner som ägnar mycket av sin tid till att ta sig an sidoprojekt och annat smått och gott. Trivs bäst bland pappersark och skisspennor, men räds inte att ta mig an Xcode och knacka ihop lite iOS-appar.";
        let experience = "Utbildningen jag sitter inne på går under namnet Digital design och Innovation. Studierna har lärt mig vikten av att ställa rätt frågor, pussla ihop utspridda historier till en enhetlig historia och att design inte bara handlar om att sätta färg och form. Jag har även erfarenhet när det kommer till utvecklingen av en fysisk produkt från tiden då jag blev accepterad till Science Park i Halmstads innovationsprogram. Det blev en ettårsstint, varpå jag sadlade om till designyrket och började extraknäcka som konsult innan jag fann min väg in på Dobus. ";
        //let shortMemory = '”När jag bodde hemma var det alltid jag som fick sköta gräsklippningen, något som inte alltid var så uppskattat. Men sen kom Automower.”';
        let shortMemory = '”Jag försöker att se varje dag som ett nytt tillfälle att utvecklas inom det jag gör och kämpa mot de mål jag har. Är man inte intelligensmässigt på samma nivå som en visionär i Elon Musk, då kan man åtminstone försöka eftersträva hans ambitionsnivå.”';
         let longMemory = (
            <div> <a href="mailto:tim@dobus.se">tim@dobus.se</a> / <a href="tel:0737457519">073 745 75 19</a> </div>
        )
        let experienceyear = "(2013—2017)";

        const skills = ["Konceptgenerering", "Interaktionsdesign", "Design sprints", "Xcode", "Swift", "HTML", "CSS",];
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

export default Tim;