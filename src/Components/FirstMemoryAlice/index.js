import React, { Component } from 'react';


const MemoriesAlice = (props) => {
    return (
        <div className="memory">
            <div className="columns">
                <div className="column is-12-mobile">
                <h3 className={"fade-in one " + props.roleclass }>Vilket är ditt livsmotto?</h3>
                </div>
            </div>
            <div className="columns">
                <div className="column is-10">
                <div className="citat fade-in two">{props.memory}</div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-6">
                    <div className="is-flex">
                    <img  className="image is-64x64 fade-in three" src={props.image} />
                    <p className="citat--description fade-in four">Scrolla ner för att läsa mer om {props.name} och hur hon kan bidra till <span className={'highlighted ' + props.roleclass }>ditt företags</span> digitala framgång. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemoriesAlice;