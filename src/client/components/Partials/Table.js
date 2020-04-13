import React from 'react';
import {Rnd} from 'react-rnd';

const Table = () => (    

    <Rnd className="table-basic"
        style={{display: `flex`}}
        default={{
            x: 50,
            y: 50,
            width: 80,
            height: 80,                                       
        }}
        minWidth={80}
        minHeight={80}
        bounds=".restoraunt-area"               
    >
        <div className="seat-1"></div>
        <div className="seat-2"></div>        
        <i className="fas fa-utensils"></i>
    </Rnd>  
);

export default Table;