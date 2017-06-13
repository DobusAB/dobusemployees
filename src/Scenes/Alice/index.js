import React, { Component } from 'react';
import Memories from '../../Components/Firstmemory';
import Skills from '../../Components/Skills';
import What from '../../Components/What';
import Footer from '../../Components/Footer';

class Alice extends Component {

    render() {
        let roleclass = "comunication";
        let image = "/alice.png";
        let name = "Alice Törnqvist";
        let role = "Kommunikatör & projektledare på Dobus";
        let how = "Genom marknadsföring via sociala medier och nätverkande bygger jag vårt varumärke dagligen i allt vi gör. Min främsta uppgift är att kommunicera ut vårt varumärke och strukturera upp det dagliga arbetet på företaget, med ett smile på läpparna.";
        let ido = "En kommunikatör med största fokus på kunden, alltid. Det finns inget jag inte skulle göra för att få våra kunder att känna sig tillfreds och nöjda. Marknadsföring är min specialitet och börjar även få en stabil grund i SEO. Med en bakgrund inom serviceinriktade yrken och en kandidatexamen som utvecklat min kompetens står jag redo för alla tänkbara utmaningar.";
        let experience = "Studerade Samhällsanalys och kommunikation, med inriktning media och kommunikation på Högskolan i Halmstad då mitt sug efter läran om mediers påverkan på samhället tog över. Jobbade som marknad- och säljassistent på ett bilföretag och drev också en nattklubb ihop med ägaren. Något som definierat min identitet och viljan att få alla att må väl är det volontärarbete jag utförde i Gambia, ett projekt med fokus på utbildning för barnen i byn.";
        let shortMemory = '"När mamma skulle försöka få mig att klippa gräsmattan med vår Husqvarana gräsklippare, låt oss säga att det inte gick så bra med en bångstyrig 13-åring".';
        let longMemory = '"Utsätt dig för möjligheten att ha tur, man vet aldrig hur kul bra det kan bli."';
        let experienceyear = "(2014—2017)";

        const skills = ["Marknadsföring", "SEO", "Kommunikation", "Copywriter", "Service"];
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

export default Alice;