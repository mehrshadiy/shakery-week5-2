// @flow
import * as React from 'react';
import {useState} from "react";

export const NavBar = () => {

    const [navBar, setNavBar] = useState(false)

    const buttonClickHandler = () => {
        setNavBar(prevState => !prevState)
        console.log(navBar)
    }

    return (
        <div className={"w-full p-3"}>
            {!navBar &&
                <button onClick={buttonClickHandler}
                        className={"border border-black p-4 rounded relative left-0 shadow-md shadow-gray-800"}>
                    menu
                </button>
            }
            {navBar &&
                <nav onClick={buttonClickHandler}
                    className={"shadow-blue-950 w-full backdrop-brightness-50 absolute left-0 top-0 "}>
                    <ul onClick={(event)=>{event.stopPropagation()}}
                        className={"overflow-y-scroll h-screen w-10/12 bg-white border border-black rounded-r-2xl shadow-md p-24"}>
                        <button onClick={buttonClickHandler}
                                className={"text-white bg-gray-700 border border-black p-4 rounded left-2 top-2 shadow-md shadow-gray-800 mb-6 absolute z-50"}>
                            close
                        </button>
                        <li className={"rounded-xl w-11/12 text-center shadow-xl shadow-blue-950 mx-auto border-2 border-gray-500 mb-10"}>
                            home
                        </li>
                        <li className={"rounded-xl w-11/12 text-center shadow-xl shadow-blue-950 mx-auto border-2 border-gray-500 mb-10"}>
                            services
                        </li>
                        <li className={"rounded-xl w-11/12 text-center shadow-xl shadow-blue-950 mx-auto border-2 border-gray-500 mb-10"}>
                            about us
                        </li>
                    </ul>
                </nav>
            }
        </div>
    );
};