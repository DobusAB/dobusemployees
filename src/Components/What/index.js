import React, {Component} from 'react';

const What = (props) => {

    return (
        <div className="whatweedoo">
            <div className="columns">
            <div className="column is-6">
                <h2 className={props.roleclass}>Vad gör jag?</h2>
                <p> {props.ido}</p>
            </div>
            <div className="column is-6">
                <h2 className={props.roleclass}>Hur?</h2>
                <p>{props.how}</p>
            </div>
            </div>
            <div className="columns experience">
            <div className="column is-12">
                <h2 className={props.roleclass}>Erfarenhet <span>{props.experienceyear}</span></h2>
                <p>{props.experience}</p>
            </div>
            </div>   
        </div>
    );
}

export default What;