import React, {useEffect, useState} from 'react';

const CardDay = ({day}) => {

    const [temperatureDay,setTemperatureDay] = useState(0)
    const average = ()=>{
        // @TODO средняя температура
        console.log(day)
        // let averageTemperature = arr.reduce((partial_sum, a) => partial_sum + a, 0) / arr.length;
        // console.log(averageTemperature)
    }

    useEffect(()=>{
        average()
    },)

    return (
        <div className="card">
            <div className="card__wrap">
                <div className="card__title">Monday</div>
                <div className="card__body">
                    <div className="card__deg">{temperatureDay}  &#8451;</div>
                    <div className="card__img">
                        <i className="pe-7w-rain-alt pe-5x pe-va"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDay;