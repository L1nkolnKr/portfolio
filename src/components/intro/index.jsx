import React from 'react';
import Scroll from "../../img/scroll.svg"
import "./intro.css"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">My name is</h2>
                    <h1 className="name">Alexsandr Krilov</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Junior front-end developer</div>
                            <div className="i-title-item">Junior full-stack developer</div>
                        </div>

                    </div>
                    <p className="i-desc">
                        Description about me
                    </p>
                </div>
                <img src={Scroll} alt="Scroll" className="i-scroll"/>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src="https://media.istockphoto.com/photos/male-lion-resting-on-a-rock-picture-id1333977253?b=1&k=20&m=1333977253&s=170667a&w=0&h=q_EqYl_GqFCR1XmF_AK91YRFDapwAClOoc2fZbsnmr4=" alt="" className="i-img"/>
            </div>
        </div>
    );
};

export default Intro;