import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';

const RestaurantFront = () => {
    const context = useContext(AppContext);        
    console.log(context)
    useEffect(() => {
       
      });
    return (
        <div>
            <div className="selection">
                <h1>Choose yor table!</h1>
            </div>

            <div className="restoraunt">
                <div className="table-basic"
                    // style={{ transform: `${asd}` }}

                    onClick={() => console.log(`FRONT`)}
                >

                    <i className="fas fa-utensils"></i>
                </div>
            </div>
        </div>
    )
}

export default RestaurantFront;