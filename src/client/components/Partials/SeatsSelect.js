import React from 'react';

const SeatsSelect = (props) => {

    return (
        <div className="seats-select">          
            <select onChange={(event) => props.seat(event.target.value)}>
                <option value="0">Select table:</option>
                <option value="2">2 seats</option>
                <option value="4">4 seats</option>
                <option value="6">6 seats</option>
                <option value="8">8 seats</option>
            </select>
        </div>
    )
}

export default SeatsSelect;