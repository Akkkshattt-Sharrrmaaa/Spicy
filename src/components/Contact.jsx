import React from 'react';
import {Link} from "react-router-dom";

function Contact(props) {
    return (
        <div
            className="w-full h-[70vh] flex flex-col items-center justify-center"
        >
            <h1>Contact Page</h1>
            <div>
                There is no need to contact us, we won't help you
            </div>
            <Link to="/"
                  className="text-red-500 hover:text-red-600 hover:font-bold"
            >
                Buy Food Here
            </Link>
        </div>
    );
}

export default Contact;