import React, { useState, useContext, useEffect } from 'react';
import Table from '../Partials/Table';
import TableGenerator from '../Partials/TableGenerator';
import { AppContext } from '../../context/AppContext';
import SeatsSelect from '../Partials/SeatsSelect';
import { Link } from 'react-router-dom';

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

    const collectData = () => {
        const data = document.querySelectorAll(`.table-basic`);
        const dataId = Array(context.tableID).fill(0).map((e,i) => i + 1); 
        let collectedData = dataId.map(v => ({id: v, seats: data[v].childElementCount - 2, cordinates: data[v].style.transform}));        
        context.allData = collectedData;
        console.log(context.allData)
    }

    const addTable = () => {
        setTable([...table, <Table />])
        context.tableID = ++table.length
    }

    const removeTable = () => {
        let allTables = document.querySelector(`.restoraunt-area i`);
        if(allTables) 
            allTables.classList.toggle(`fa-utensils`)         
            allTables.classList.toggle(`fa-times-circle`)        
    }
    
    return (
        <div className="restaurant-organize">

            <div className="selection-area">
                <TableGenerator table={addTable} />
                <SeatsSelect seat={seatsNumber} />
                <div className="rotateDel">
                    <button className="deleteBtn" onClick={removeTable}>Delete</button>
                    <button className="rotateBtn">Rotate</button>
                    <button className="collectBtn" onClick={collectData}>Get DATA</button>
                </div>
                <div className="goToFront">
                    <button className="toFront"><Link to={'/front'}>Front restoraunt</Link></button>
                </div>
            </div>

            <div className="restoraunt-area">
                {table}
            </div>

        </div>
    );
}

export default OrganizeTables;
