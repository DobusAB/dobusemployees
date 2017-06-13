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
        let role = "Apputvecklare på Dobus";
        let how = "Jag är en utvecklare som har arbetat med programmering inom olika områden. Mitt huvudfokus på jobbet är utveckling av system- och mobilapplikationer.";
        let ido = "En programmerare som arbetar lika bra individuellt som i lag. Älskar att lösa problem och ta mig an nya utmaningar. Som konsult arbetar man med nya projekt ständigt, vilket jag tycker är kul. Det jag arbetar med främst är att utveckla Android- och iOS-applikationer tillsammans med RESTful APIs. Jag gör alltid mitt bästa för att få våra kunder nöjda.";
        let experience = "Programmerande interaktionsdesigner som ägnar mycket av sin tid till att ta sig an sidoprojekt och annat smått och gott. Trivs bäst bland pappersark och skisspennor, men räds inte att ta mig an Xcode och knacka ihop lite iOS-appar.";
        let shortMemory = '”Mitt första minne av Husqvarna är en orange gräsklippare som mina släktingar hade för många år sedan. När jag var yngre brukade jag hjälpa de att klippa gräset.”';
        let longMemory = '”Välj ett jobb som du älskar och du kommer aldrig att behöva arbeta en dag i hela ditt liv."';
        let experienceyear = "(2011—2017)";

        const skills = ["iOS", "Swift 3.0", "Android", "Java", "ASP.NET MVC", "C#", "Laravel", "PHP"];
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