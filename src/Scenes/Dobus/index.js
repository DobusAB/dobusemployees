import React, { Component } from 'react';
import DobusImage from '../../Components/DobusImage';
import './style.scss';

class Dobus extends Component {

    constructor(props, context) {
		super(props, context);

        this.state = {
            style: {}
        }
	}

    gradient = () => {



    }
    componentDidMount = () => {
        this.gradient();
    }

    render() {
       
        return (
            <div>
                <div className="dobus">
                    <div className="hero is-fullheight">
                        <div className="hero-body content-image">
                            <div className="container">
                                <DobusImage />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dobusdescription">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-12">
                                <h2>Så, vad är då Dobus och vad gör de? </h2>
                                <p>En gång en webbyrå, inte alltid en webbyrå. Dobus grundades år 2015 som en webbyrå med utvecklarkompetens endast. </p>
                                <p>I dag är Dobus en snabbt växande <span className="orange">digital byrå</span> med fokus på <span className="pink">mycket mer än bara webb.</span>  Vi skräddarsyr och designar helhetslösningar som har användaren i åtanke, för att därefter påbörja utvecklingsprocssen.  </p>
                                <p>Nyckelorden är användarcentrerad och iterativ utveckling,  saker som vi tror gör skillnaden mellan att nå ett bra och mindre bra resultat.  </p>
                                <div className="greetings">
                                    <h4>Hälsningar från gänget på <span className="strong">Dobus</span>.</h4>
                                    <div className="is-flex">
                                        <img className="image is-48x48" src="/johan.png" />
                                        <img className="image is-48x48" src="/tim.png" />
                                        <img className="image is-48x48" src="/viman.png" />
                                        <img className="image is-48x48" src="/alice.png" />
                                        <img className="image is-48x48" src="/tobias.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dobus;