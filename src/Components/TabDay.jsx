import React from 'react';
import CardDay from "./CardDay";
import Tab from "react-bootstrap/Tab";
import Chart from "./Chart";

const TabDay = ({period}) => {
    console.log(Object.keys(period).slice(1, 2))
    return (
        // @TODO убрать перебор массива, переделать на что то проще
        // получать 1й день slice(0, 1)
        <>
            {
                Object.keys(period).slice(1, 2).map((day)=> {
                    return <CardDay day={day} data={period[day]} key={day}/>
                })
            }
            {
                Object.keys(period).slice(1, 2).map((day)=> {
                    return <Chart data={period[day]} key={day}/>
                })
            }

        </>
    );
};

export default TabDay;