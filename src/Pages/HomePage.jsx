import React, {useEffect, useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardDay from "../Components/CardDay";

import periodWeek from "../assets/data/period-weather.json"
import {useParsePeriod} from "../hooks/hooks";

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
                    {
                        // <CardDay day={Object.keys(period)[0]} data={Object.keys(period)[0]}/>

                    }
                </Tab>
                <Tab eventKey="days" title="Next 7 days">
                    <div className="card__wrapper">
                        {
                            Object.keys(period).map((day)=> {
                                return <CardDay day={day} data={period[day]} key={day}/>
                            })
                        }
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default HomePage;