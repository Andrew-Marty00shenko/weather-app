import { useState, useEffect } from 'react';

export const usePosition = () => {
    const [position, setPosition] = useState({
        latitude: null,
        longitude: null
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            });
        });
    }, []);

    return { ...position };
}