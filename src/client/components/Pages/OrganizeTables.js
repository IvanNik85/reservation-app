import React from 'react';
import Table from '../Partials/Table';
import TableGenerator from '../Partials/TableGenerator';

const OrganizeTables = () => (
       <div className="restaurant-organize">
           <div className="selection-area">                
                <div className="generate-table">
                    <TableGenerator />
                </div>
                <div className="seats-select">
                    <h2>Choose table:</h2>
                    <select>
                        <option value="0">Select table:</option>
                        <option value="1">2 seats</option>
                        <option value="2">4 seats</option>
                        <option value="3">6 seats</option>
                        <option value="4">8 seats</option>
                    </select>
                </div>
           </div>
            <div className="restoraunt-area">
                <Table />
            </div>
       </div>
    );

export default OrganizeTables;
