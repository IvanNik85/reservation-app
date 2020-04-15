import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const TableGenerator = (props) => {
    const context = useContext(AppContext);

    const tableDimension = () => {
        const seats = context.seats.length;
        let val;
        seats === 2 && (val = { background: `#42ba8a` });
        seats === 4 && (val = { background: `#ba4f42` });
        seats === 6 && (val = { width: `160px`, background: `#429cba` });
        seats === 8 && (val = { width: `160px`, height: `160px`, background: `#ba4277` });
        return val;
    }

    return (
        <div className="generate-table">
            <div className="table-wrap">
                <div className="table-basic scale"
                    style={tableDimension()}
                    onClick={() =>
                        context.seats.length ?
                            props.table() :
                            alert(`Please select number of seats`)
                    }>
                    {context.seats}
                    <i className="fas fa-utensils"></i>
                </div>
            </div>
        </div>
    );
}

export default TableGenerator;

