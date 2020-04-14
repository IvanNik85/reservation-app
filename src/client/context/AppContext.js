import React, {useState} from 'react';

export const AppContext = React.createContext();

const AppContextProvider = (props) => {
    const [seats, setSeats] = useState([]);
       
    return (
        <AppContext.Provider value={{
             seats,                      
        }}>
            {props.children}
        </AppContext.Provider>  
    );
}

export default AppContextProvider;