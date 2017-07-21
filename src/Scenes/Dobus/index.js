import React, { Component } from 'react';
import DobusImage from '../../Components/DobusImage';
import {Link} from 'react-router';
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
                    <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-12">
                                <h2>En gång en webbyrå, nu en digital byrå.</h2>
                                <p>Dobus grundades år 2015 som en webbyrå med utvecklarkompetens endast. I dag är Dobus en snabbt växande <span className="yellow strong">digital byrå</span> med fokus på <span className="yellow strong">mycket mer än bara webb.</span>  Vi skräddarsyr och designar helhetslösningar, för att därefter påbörja en utvecklingsprocess där kundkommunikation värdesätts högt.  </p>
                                <p>Nyckelorden är <span className="yellow strong">användarcentrerad</span> och <span className="yellow strong">iterativ utveckling</span>,  saker som vi tror gör skillnaden när det kommer till att nå ett bra resultat.</p>
                                { /* <h2 className="no-margin">Några av våra kunder vi fått förtroende av: </h2>
                                <div className="columns">
                                    <div className="column is-6">
                                        <p><span className="tag is-light is-large"> Hemsida 24 AB </span> <span className="tag is-light is-large"> Brandskydd & HLR i Halland AB</span> <span className="tag is-light is-large">Riddermarkbil AB </span> <span className="tag is-light is-large">Bendt bil AB </span>  <span className="tag is-light is-large">Marknadsföreningen i Halland </span> <span className="tag is-light is-large"> Aktiebolaget Halmstad Kylteknik </span> <span className="tag is-light is-large">Forefront Consulting Group AB </span></p>
                                    </div>
                                </div> */ }
                                <div className="greetings">
                                    <h4>Hälsningar från gänget på <span className="strong">Dobus</span>.</h4>
                                    <div className="is-flex">
                                        <Link to="johan"><img className="image is-48x48" src="/johan.png" /> </Link>
                                         <Link to="tim"><img className="image is-48x48" src="/tim.png" /> </Link>
                                         <Link to="viman"><img className="image is-48x48" src="/viman.png" /> </Link>
                                         <Link to="alice"><img className="image is-48x48" src="/alice.png" /> </Link> 
                                         <Link to="tobias"><img className="image is-48x48" src="/tobias.png" /> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        );
    }
}

export default Dobus;