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
        let role = "UX - designer på Dobus";
        let how = "Den stora delen av kunskapen ligger inom ramarna av interaktionsdesign, men på senare tid har det även tillkommit mycket fokus på programmering (och främst iOS-utveckling).";
        let ido = "Programmerande interaktionsdesigner som ägnar mycket av sin tid till att ta sig an sidoprojekt och annat smått och gott. Trivs bäst bland pappersark och skisspennor, men räds inte att ta mig an Xcode och knacka ihop lite iOS-appar.";
        let experience = "Programmerande interaktionsdesigner som ägnar mycket av sin tid till att ta sig an sidoprojekt och annat smått och gott. Trivs bäst bland pappersark och skisspennor, men räds inte att ta mig an Xcode och knacka ihop lite iOS-appar.";
        let shortMemory = '”När jag bodde hemma var det alltid jag som fick sköta gräsklippningen, något som inte alltid var så uppskattat. Men sen kom Automower.”';
        let longMemory = '”När jag bodde hemma var det alltid jag som fick sköta gräsklippningen, något som inte alltid var så uppskattat. Men sen kom Automower. Denna lilla robotgräsklippare förenklade mitt liv något sanslöst och den kommer därför alltid ha en säkrad plats i hjärtat."';
        let experienceyear = "(2013—2017)";

        const skills = ["Javascript", "Swift 3.0", "Sketch"];
        return (
            <div className="emplooyes">
                <div className="container">
                    <Memories memory={shortMemory} 
                            image={image}
                            roleclass={roleclass}
                     />
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

export default Tim;