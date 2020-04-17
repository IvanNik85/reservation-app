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
    const [rotate, setRotate] = useState(0)

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
        const dataId = Array(context.tableID).fill(0).map((e, i) => i + 1);
        let collectedData = context.tableID && dataId.map((v,i) => (
            {
                id: v,                
                seats: context.seatsData[i],
                width: data[v].style.width,
                height: data[v].style.height,
                cordinates: data[v].style.transform
            }
        ));
        context.allData = collectedData;       
    }
    
    const addTable = () => {
        setTable([...table, <Table key={table.length} rotate={rotate}/>])
        context.tableID = ++table.length;
        context.seatsData = [...context.seatsData, seats];
    }

    const removeTable = () => {
        let tableRemoved = table.length ? table.slice(0, -1) : [];
        context.tableID && (context.tableID = table.length - 1);
        context.seatsData && context.seatsData.pop();        
        setTable(tableRemoved);
    }

    const rotateTable = () => {
        let rotateTable = rotate + 45;
        setRotate(rotateTable);
    }

    return (
        <div className="restaurant-organize">

            <div className="selection-area">
                <TableGenerator table={addTable} rotate={rotate}/>
                <SeatsSelect seat={seatsNumber} />
                <div className="rotateDel">
                    <button className="deleteBtn" onClick={removeTable}>Undo</button>
                    <button className="rotateBtn" onClick={rotateTable}>Rotate</button>
                    <button className="collectBtn" onClick={collectData}>Save</button>
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
