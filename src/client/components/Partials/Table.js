import React, { useContext } from 'react';
import { Rnd } from 'react-rnd';
import { AppContext } from '../../context/AppContext';

const Table = () => {
    const tableData = useContext(AppContext);

    return (
        <Rnd className="table-basic"
            style={{ display: `flex` }}
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
            {tableData.seats}
            <i className="fas fa-utensils"></i>
        </Rnd>
    );
}

export default Table;