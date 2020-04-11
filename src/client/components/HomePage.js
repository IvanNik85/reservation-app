import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

const HomePage = () => {
  const { appTitle } = useContext(AppContext);

  return (
    <div className="homepage">
      <p>Welcome to {appTitle}</p>
    </div>
  );
};

export default HomePage;
