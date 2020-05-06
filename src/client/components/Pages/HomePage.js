import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/AppContext";

const HomePage = () => {
    const { appTitle } = useContext(AppContext);

    return (
        <div className="homepage">
            <h2>Welcome to The Three Musketeers restoraunt App{appTitle}</h2>
            <button><Link to="/organize">Admin table organize</Link></button>
        </div>
    );
};

export default HomePage;
