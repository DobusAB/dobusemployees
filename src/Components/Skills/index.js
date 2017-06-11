import React, {Component} from 'react';

const Skills = (props) => {

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
                    <span className="tag is-light is-medium">Javascript</span>
                    <span className="tag is-light is-medium">Light</span>
                    <span className="tag is-light is-medium">Light</span>
                    <span className="tag is-light is-medium">Light</span>
                    <span className="tag is-light is-medium">Light</span>
                    <span className="tag is-light is-medium">Light</span>
                    <span className="tag is-light is-medium">Light</span>
                    <span className="tag is-light is-medium">Light</span>
                    <span className="tag is-light is-medium">Light</span>
                    <span className="tag is-light is-medium">Light</span>
                    <span className="tag is-light is-medium">Light</span>
                    <span className="tag is-light is-medium">Light</span>
                    <span className="tag is-light is-medium">Light</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;