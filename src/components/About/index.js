import React from "react";
import PictureMe from '../../assets/picture-me.PNG';

function About() {
    return (
        <section className="text-center">
            <h1 className="text-secondary">About Me</h1>
            <img src={PictureMe} alt="" className="img-fluid rounded-circle mb-3"></img>
            <p>Hey! I'm a Pittsburgh based web developer. I am currently completeing the Web Development Bootcamp at University of Richmond. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </section>
    )
}

export default About;