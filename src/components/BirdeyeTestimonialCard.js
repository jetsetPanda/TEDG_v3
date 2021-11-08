import React from 'react';
import useScriptHook from "../utilities/useScriptHook";

const BirdeyeTestimonialCard = props => (
    <React.Fragment>
        {/*below: is the provided embed code, just adapted to React using my custom useScriptHook and making it a stateless component*/}

        {useScriptHook('https://birdeye.com/embed/v4/161643448373000/8/1234568005183')}

        <div id="bf-revz-widget-1234568005183">
            <div className="bf-dv">
            <span className="bf-spn"> powered by
                <a className="bf-pwr"
                   href="https://birdeye.com/"
                   target="_blank"
                >
                    BirdEye
                </a>
            </span>
            </div>
        </div>

    </React.Fragment>
);

export default BirdeyeTestimonialCard;
