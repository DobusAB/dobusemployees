import React, { Component } from 'react';
import DobusImage from '../../Components/DobusImage';

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
                    <DobusImage />
                </div>
            </div>
            
        );
    }
}

export default Dobus;