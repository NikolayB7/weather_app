import React from 'react';
import CardDay from "./CardDay";
import Tab from "react-bootstrap/Tab";

const TabWeek = ({period}) => {
    return (
        <div className="card__wrapper">
            {
                Object.keys(period).map((day)=> {
                    return <CardDay day={day} data={period[day]} key={day}/>
                })
            }
        </div>
    );
};

export default TabWeek;