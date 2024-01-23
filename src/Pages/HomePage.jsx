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
                    Tab content for Home
                </Tab>
                <Tab eventKey="days" title="Next 7 days">
                    <div className="card__wrapper">
                        {
                            Object.keys(period).map((el)=> {
                                return <CardDay day={period[el]} key={el}/>
                            })
                        }
                        {/*{ period.map((el)=>(*/}
                        {/*    <CardDay/>*/}
                        {/*))}*/}

                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default HomePage;