import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { currentCity } from "../store/citySlice"

export const useNavigator = () => {
    const [position, setPosition] = useState(null);
    const dispatch = useDispatch()
    useEffect(() => {
        const getPosition = () => {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        resolve(pos)
                    },
                    (err) => reject(err)
                );
            });
        };

        getPosition()
            .then((pos) => {
                let position = {
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude
                }
                setPosition(position);
                dispatch(currentCity(position))
            })
            .catch((error) => {
                // Handle error here
                console.error(error);
                dispatch(currentCity({}))
            });
    }, []);

    return position;
};

export const useParsePeriod = (data) =>{
        const result = {};
        for (let i = 0; i < data.hourly.time.length; i++) {
            const datetime = data.hourly.time[i];
            const temperature = data.hourly.temperature_2m[i];

            const dateObj = new Date(datetime);
            const date = dateObj.toISOString().split('T')[0];
            const time = dateObj.toISOString().split('T')[1].split('.')[0];

            if (!result[date]) {
                result[date] = [];
            }

            result[date].push({
                time,
                temperature,
            });
        }
        return result;

}
