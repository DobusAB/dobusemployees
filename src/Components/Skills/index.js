import React, {Component} from 'react';

const Skills = (props) => {
    console.log(props.skills);
    return (
        <div className="skills">
            <div className="columns">
                <div className="column is-4">
                <img src={props.image} />
                </div>
                <div className="column is-7">
                <h2>{props.name}</h2>
                <h3 className={props.roleclass}>{props.role}</h3>
                <h4>Mina huvudskills</h4>
                <div className="tags">
                    {
                        props.skills.map(function(value, index){
                            return <span key={index} className="tag is-light is-large">{value}</span>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;