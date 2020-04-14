import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const TableGenerator = (props) => {
    const context = useContext(AppContext);

    return (
        <div className="generate-table">
            <div className="table-basic"
                onClick={() =>
                    context.seats.length ?
                        props.table() :
                        alert(`Please select number of seats`)
                }>
                {context.seats}
                <i className="fas fa-utensils"></i>
            </div>
        </div>
    );
}

export default TableGenerator;

