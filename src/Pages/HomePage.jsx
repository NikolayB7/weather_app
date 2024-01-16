import React, {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardDay from "../Components/CardDay";
const HomePage = () => {
    const [key, setKey] = useState('days');

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
                    <CardDay/>
                    <CardDay/>
                    <CardDay/>
                    <CardDay/>
                    <CardDay/>
                    <CardDay/>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default HomePage;