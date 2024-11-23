import React from 'react';
import HeaderButton from "./HeaderButton.jsx";

function UserAuth() {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    return (
        <ul
            className="flex items-center justify-evenly gap-7"
        >

            {
                (isLoggedIn) ?
                    //  if user is logged in
                    (
                        <HeaderButton
                            text={"Sign Out"}
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    )

                    // else
                    :(
                       <div
                           className=" flex items-center justify-center gap-3"
                       >
                           <HeaderButton
                               text={"Log In"}
                               isLoggedIn={isLoggedIn}
                               setIsLoggedIn={setIsLoggedIn}
                           />
                           <HeaderButton
                               text={"Sign Up"}
                               isLoggedIn={isLoggedIn}
                               setIsLoggedIn={setIsLoggedIn}
                           />
                       </div>
                    )
            }
        </ul>
    );
}

export default UserAuth;