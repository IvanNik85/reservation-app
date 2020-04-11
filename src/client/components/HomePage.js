import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

const HomePage = () => {
  const { appTitle } = useContext(AppContext);

  return (
    <p>Welcome to {appTitle}</p>
  );
};

export default HomePage;
