import React, {useState} from 'react';

export const AppContext = React.createContext();

const AppContextProvider = (props) => {
    const [seats, setSeats] = useState([]);
    const [tableID, setTableID] = useState([]);   
    const [allData, setAllData] = useState([]);   
       
    return (
        <AppContext.Provider value={{
             seats, 
             tableID,  
             allData                            
        }}>
            {props.children}
        </AppContext.Provider>  
    );
}

export default AppContextProvider;