import React, { useState } from "react";

import AppContextProvider from "../context/AppContext";
import AppRouter from "../routers/AppRouter";

const AppStore = () => {
  const [appTitle] = useState("Reservation App");

  return (
    <AppContextProvider value={{
      appTitle
    }}>
      <AppRouter />
    </AppContextProvider>
  );
};

export default AppStore;
