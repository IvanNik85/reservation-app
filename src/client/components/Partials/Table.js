import React, { useContext, useState } from 'react';
import { Rnd } from 'react-rnd';
import { AppContext } from '../../context/AppContext';

const Table = () => {
    const context = useContext(AppContext);     
   
    const selectTable = () => {
        switch (context.seats.length) {
            case 2:
                return table(80, 80, `#42ba8a`)
            case 4:
                return table(100, 100, `#ba4f42`)
            case 6:
                return table(160, 80, `#429cba`)
            case 8:
                return table(160, 160, `#ba4277`)
        }
    }    
     
    const table = (width, height, color) => (
        <Rnd className="table-basic"
            data-id={`${context.tableID}`}       
            style={{ display: `flex`, background: color }}
            default={{
                x: 50,
                y: 50,
                width: width,
                height: height,
            }}
            minWidth={width}
            minHeight={height}
            // disableDragging    
            enableResizing      
            bounds=".restoraunt-area"
        >
            {context.seats}
            <i className="fas fa-utensils"></i>
        </Rnd>
    )

    return (
        selectTable()
    )
}

export default Table;