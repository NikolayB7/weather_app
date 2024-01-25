import React, {useEffect, useState} from 'react';

const CardDay = ({data,day}) => {

    const [temperatureDay,setTemperatureDay] = useState(0)
    const [dayWeek,setDayWeek] = useState('')
    const parseDay = ()=>{
        let dt = new Date(day).toLocaleDateString(
            'en-US', {weekday: 'long'}
        );
        setDayWeek(dt)
    }
    const average = ()=>{
        let sum = 0;
        let result;
        data.map((el)=>{
            sum += el.temperature
        });
        result =  Math.floor(sum/data.length)
        setTemperatureDay(result)
    }

    useEffect(()=>{parseDay()},[dayWeek])
    useEffect(()=>{
        average()
    },[temperatureDay])

    return (
        <div className="card">
            <div className="card__wrap">
                <div className="card__title">{dayWeek}</div>
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