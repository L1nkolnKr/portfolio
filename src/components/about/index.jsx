import React from 'react';
import"./about.css"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://media.istockphoto.com/photos/male-lion-resting-on-a-rock-picture-id1333977253?b=1&k=20&m=1333977253&s=170667a&w=0&h=q_EqYl_GqFCR1XmF_AK91YRFDapwAClOoc2fZbsnmr4=" alt="preview" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <div className="a-title">About me</div>
                <p className="a-sub">
                    sadsadsad
                </p>
                <p className="a-desc">
                    sdfdasfdasf
                </p>
            </div>
        </div>
    );
};

export default About;