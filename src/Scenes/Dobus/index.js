import React, { Component } from 'react';
import Memories from '../../Components/Firstmemory';
import Skills from '../../Components/Skills';
import What from '../../Components/What';
import Footer from '../../Components/Footer';
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
            <div className="dobus">
                <div className="container">
                    <div className="columns">
                        <div className="column is-12">
                            <h2 className="has-text-centered" style={this.state.styles}>Hej Husqvarna.  Vi är Dobus. <br /> En ung och växande digital byrå med säte i Halmstad.</h2>
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
            </div>
            
        );
    }
}

export default Dobus;