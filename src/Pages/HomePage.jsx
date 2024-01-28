import React, {useEffect, useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardDay from "../Components/CardDay";

import periodWeek from "../assets/data/period-weather.json"
import {useParsePeriod} from "../hooks/hooks";
import TabDay from "../Components/TabDay";
import TabWeek from "../Components/TabWeek";

const HomePage = () => {
    const [key, setKey] = useState('days');

    const [period,setPeriod] = useState([])

    useEffect(()=>{
        setPeriod(useParsePeriod(periodWeek))
    },[])


    return (
        <div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="today" title="Today">
                    <TabDay period={period}/>
                </Tab>
                <Tab eventKey="days" title="Next 7 days">
                        <TabWeek period={period}/>
                </Tab>
            </Tabs>
        </div>
    );
};

export default HomePage;