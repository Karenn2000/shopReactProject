import React from "react";

const About = () => {
    return (
        <div 
        style={{display: "flex",
               justifyContent: "center",
        }}
        >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24360.65764962363!2d44.397275043233485!3d40.25170432784008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a974358df89e5%3A0xffdc4fe7a305810b!2sProshyan!5e0!3m2!1sen!2sam!4v1699184292924!5m2!1sen!2sam"
             width="600"
             height="450"
             style={{border: "0"}} 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">
             </iframe>
        </div>
    )
};


export default About;