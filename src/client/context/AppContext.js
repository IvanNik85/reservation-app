import React, {useState} from 'react';

export const AppContext = React.createContext();

const AppContextProvider = (props) => {
    const [seats, setSeats] = useState([]);
    const [seatsData, setSeatsData] = useState([]);
    const [tableID, setTableID] = useState(0);   
    const [allData, setAllData] = useState([]);   
    const [tableDimension, setTableDimension] = useState([]);   
       
    return (
        <AppContext.Provider value={{
             seats, 
             seatsData,                       
             tableID,  
             allData,
             table : tableDimension
        }}>
            {props.children}
        </AppContext.Provider>  
    );
}

export default AppContextProvider;