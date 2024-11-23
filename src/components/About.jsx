import React from 'react';
import {Link} from "react-router-dom";

function About() {
    return (
        <div
            className="w-full h-[70vh] flex flex-col items-center justify-center"
        >
            <h1>About Us</h1>
            <div>
                There is nothing to see here.
            </div>
            <Link to="/"
                  className="text-red-500 hover:text-red-600 hover:font-bold"
            >
                Buy Food Here
            </Link>
        </div>
    );
}

export default About;