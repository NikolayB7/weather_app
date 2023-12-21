import {useEffect, useState} from "react";

export const useNavigator = () => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        const getPosition = () => {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (pos) => resolve(pos),
                    (err) => reject(err)
                );
            });
        };

        getPosition()
            .then((pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude
                });
            })
            .catch((error) => {
                // Handle error here
                console.error(error);
            });
    }, []);

    return position;
};
