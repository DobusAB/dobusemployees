import React from 'react';


const Footer = (props) => {


    return (
        
            <section className={"first-memories section is-fullwidth fade-in four " + props.roleclass}>
            <div className="container">
                <div className="columns">
                    <div className="column is-12">
                        <h2>Mitt livsmotto</h2>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-8">
                        <p>{props.memory}</p>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-6-mobile">
                        <div className="is-flex">
                        <img  className="image is-64x64" src={props.image} />
                        <div className="texts">
                            <h3>{props.name}</h3>
                            <h3 className="strong">{props.role}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    

    );
}

export default Footer;