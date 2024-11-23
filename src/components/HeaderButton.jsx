import React from 'react';

function HeaderButton(props) {

    const buttonText = props.text;
    const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;

    return (
        <button
            className=" border border-gray-300 px-3 py-1 rounded-xl shadow-lg hover:scale-105 hover:bg-red-500 hover:text-amber-50 transition-all duration-150"
            onClick={()=> setIsLoggedIn(!isLoggedIn)}
        >
            {buttonText}
        </button>
    );
}

export default HeaderButton;