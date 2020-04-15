import React, { useState, useContext, useEffect } from 'react';
import Table from '../Partials/Table';
import TableGenerator from '../Partials/TableGenerator';
import { AppContext } from '../../context/AppContext';
import SeatsSelect from '../Partials/SeatsSelect';

const OrganizeTables = () => {
    const context = useContext(AppContext);
    const [seats, setSeats] = useState([])
    const [table, setTable] = useState([])

    const seatsNumber = (num) => {
        let table = [];
        let position;

        num === "0" && (table.length = 0);
        for (let i = 1; i <= num; i++) {
            ((num === "6" || num === "8") && (i === 1 || i === 2)) ?
                (position = { left: `15%` }) :
                (position = {});
            num === "8" && (i === 3 || i === 4) && (position = { top: `20%` })
            table = [...table, <div key={i} style={position} className={`seat-${i}`}></div>];
        }
        setSeats(table);
        context.seats = table;
    }

    const addTable = () => {
        setTable([...table, <Table />])
    }

    return (
        <div className="restaurant-organize">

            <div className="selection-area">
                <TableGenerator table={addTable} />
                <SeatsSelect seat={seatsNumber} />
                <div className="rotateDel">
                    <button>Delete</button>
                    <button>Rotate</button>
                </div>
            </div>

            <div className="restoraunt-area">
                {table}
            </div>

        </div>
    );
}

export default OrganizeTables;
