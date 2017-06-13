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
                                <h2>En gång en webbyrå, inte alltid en webbyrå.</h2>
                                <p>Dobus grundades år 2015 som en webbyrå med utvecklarkompetens endast. I dag är Dobus en snabbt växande <span className="yellow strong">digital byrå</span> med fokus på <span className="yellow strong">mycket mer än bara webb.</span>  Vi skräddarsyr och designar helhetslösningar, för att därefter påbörja en utvecklingsprocess där kundkommunikation värdesätts högt.  </p>
                                <p>Nyckelorden är <span className="yellow strong">användarcentrerad</span> och <span className="yellow strong">iterativ utveckling</span>,  saker som vi tror utgör skillnaden mellan att nå ett bra kontra ett mindre bra resultat.</p>
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