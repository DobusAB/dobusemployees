import React, { Component } from 'react';


const Memories = (props) => {
    return (
        <div className="memory">
            <div className="columns">
                <div className="column is-12">
                <h3 className={props.roleclass}>Vilket är ditt första minne av Husqvarna?</h3>
                </div>
            </div>
            <div className="columns">
                <div className="column is-10">
                <div className="citat">{props.memory}</div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-6">
                    <div className="is-flex">
                    <img  className="image is-64x64" src={props.image} />
                    <p className="citat--description">Scrolla ner för att läsa mer om Tim och hur <span className={'highlighted ' + props.roleclass }>Husqvarna</span> gjorde hans sysslor till ett minne blott.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Memories;