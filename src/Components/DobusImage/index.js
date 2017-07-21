import React from 'react';
import './style.scss';


const DobusImage = () => {

    return (
        <div>
        <div className="columns">
            <div className="column is-12 fade-in one">
                <h2 className="has-text-centered"><span className="">Hej företagare.</span><span className="">Vi är Dobus.</span> <br /> <span className="">En ung och växande digital byrå med säte i Halmstad.</span></h2>
            </div>
        </div>
        <div className="dobus-image">
            <div className="columns has-text-centered">
                <div className="column is-12 fade-in three">
                    <div className="cont">
                        <img className="site grow"  src="/dobus-site-3.png"/>
                        <p><a href="https://dobus.se" target="_blank">Gå till hemsidan</a></p>
                    </div>
                </div>
            </div>
            <div className="columns scrolldown">
                <div className="column is-12">
                    <div className="has-text-centered">
                        <div className="has-text-centered fade-in five">
                            <img className="custom-animation"  src="/mouseicon.svg"/>
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