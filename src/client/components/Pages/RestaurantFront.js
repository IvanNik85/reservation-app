import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);

    useEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
}

const RestaurantFront = () => {
    const context = useContext(AppContext);
    const [initialW, setInitial] = useState(window.innerWidth)
    const styleTable = context.table;
    const [width, height] = useWindowSize();
    let zoomPercent = width / initialW * 100;

    return (
        <div>
            <div className="selection">
                <h1>Select time, date</h1>                
            </div>

            <div className="restoraunt-wrap">
                <div className="restoraunt-area front" style={{ zoom: `${zoomPercent}%`}}>
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
                            <i className="fas fa-utensils" style={{ transform: `rotate(-${rotValue}deg)` }}></i>
                        </div>)
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default RestaurantFront;