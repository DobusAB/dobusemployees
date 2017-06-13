import React, {Component} from 'react';

const Skills = (props) => {
    console.log(props.skills);
    return (
        <div className="skills fade-in four ">
            <section className="section">
            <div className="container">
            <div className="columns">
                <div className="column is-12">
                    <div className="columns">
                        <div className="column is-4">
                            <img className="image" src={props.image} />
                        </div>
                        <div className="column is-7">
                            <h2>{props.name}</h2>
                            <h3 className={props.roleclass}>{props.role}</h3>
                            <h4>Mina huvudskills</h4>
                            <div className="tags">
                                {
                                    props.skills.map(function(value, index){
                                        return <span key={index} className="strong tag is-light is-large">{value}</span>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
}

export default Skills;