import React from 'react';
import './style.scss';


const DobusImage = () => {

    return (
        <div>
        <div className="columns">
            <div className="column is-12">
                <h2 className="has-text-centered">Hej Husqvarna.  Vi är Dobus. <br /> En ung och växande digital byrå med säte i Halmstad.</h2>
            </div>
        </div>
        <div className="dobus-image">
            <div className="columns has-text-centered">
                <div className="column is-12 ">
                    <img className="site"  src="/dobussite.png"/>
                </div>
            </div>
            <div className="columns scrolldown">
                <div className="column is-12">
                    <div className="has-text-centered">
                        <div className="has-text-centered">
                            <img className=""  src="/mouseicon.svg"/>
                            <p>Scrolla ner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default DobusImage;