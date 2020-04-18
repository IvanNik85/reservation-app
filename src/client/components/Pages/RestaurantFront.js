import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';

const RestaurantFront = () => {
    const context = useContext(AppContext);
    const styleTable = context.table;
    console.log(context.allData)
    return (
        <div>
            <div className="selection">
                <h1>Choose yor table!</h1>
            </div>

            <div className="restoraunt-area front">
                {context.allData.map((item, i) => {
                    let [rotValue] = item.rotated.match(/\d+/g)
                    return (<div className="table-basic"
                        key={i}
                        style={
                            {
                                width: `${item.width}`,
                                height: `${item.height}`,
                                transform: `${item.cordinates} ${item.rotated}`,
                                background: `${styleTable(item.seats.length).background}`
                            }
                        }
                        onClick={() => console.log(`FRONT`)}
                    >
                        {item.seats}
                        <i className="fas fa-utensils" style={{transform: `rotate(-${rotValue}deg)`}}></i>
                    </div>)
                })
                }
            </div>
        </div>
    )
}

export default RestaurantFront;