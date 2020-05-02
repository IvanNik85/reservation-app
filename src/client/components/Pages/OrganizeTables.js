import React, { useState, useContext } from 'react';
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
    const [tableSize, setTableSize] = useState(0.8)    

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
        setRotate(0);    
        setSeats(table);
        context.seats = table;    
    }

    const collectData = () => {
        const data = document.querySelectorAll(`.table-basic`);
        if (context.tableID === 0) {
            alert(`No tables selected!`)
            return;
        }
        const dataId = Array(context.tableID).fill(0).map((e, i) => i + 1);
        let collectedData = context.tableID && dataId.map((v,i) => (
            {
                id: v,                
                seats: context.seatsData[i],
                width: data[v].style.width,
                height: data[v].style.height,
                rotated: data[v].style.transform,
                cordinates: data[v].parentElement.style.transform
            }
        ));
        context.TableData = collectedData;       
    }
    
    const addTable = () => {
        setTable([...table, <Table key={table.length} rotate={rotate} size={tableSize}/>])
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
                <div className="generate-table">
                    <TableGenerator table={addTable} rotate={rotate} size={tableSize}/>
                    <button className="sizeBtn increase" onClick={() => tableSize < 1 && setTableSize(tableSize + 0.1)}>+</button>
                    <button className="sizeBtn decrease" onClick={() => tableSize > 0.6 && setTableSize(tableSize - 0.1)}>-</button>   
                </div>
                <SeatsSelect seat={seatsNumber} />
                <div className="rotateDel">
                    <button className="deleteBtn" onClick={removeTable}>Undo</button>
                    <button className="rotateBtn" onClick={rotateTable}>Rotate</button>
                    <button className="collectBtn" onClick={collectData}>Save</button>
                    <button className="toFront"><Link to={'/front'}>Front</Link></button>                                    
                </div>
            </div>

            <div className="restoraunt-area">
                {table}
            </div>

        </div>
    );
}

export default OrganizeTables;
