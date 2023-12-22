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
