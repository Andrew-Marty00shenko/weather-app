import { useEffect,useMemo } from "react";
import { usePosition } from "../utils/usePosition";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Icon } from "@shopify/polaris";
import {CirclePlusMinor} from '@shopify/polaris-icons';

import actionsWeather from "../redux/actions/weather-action";
import actionsSelected from "../redux/actions/selected-action";

const Main = () => {
    const { latitude, longitude } = usePosition();
    const currentWeather = useSelector(state =>  state.weatherReducer.currentWeather, shallowEqual);
    const dispatch = useDispatch();
    
    const temp = useMemo(()=>{
       return currentWeather && Math.floor(currentWeather.main.temp - 273.15);
    },[currentWeather]);

    const country =  useMemo(()=>{
        return currentWeather && (currentWeather.sys.country);
     },[currentWeather]);

    const onSelectCity = () =>{
        dispatch(actionsSelected.onSelectedCities(currentWeather.sys.country))
    }

    useEffect(() => {
        if(latitude && longitude ){
            dispatch(actionsWeather.fetchWeatherByLocation(latitude, longitude));
        }
    }, [ latitude, longitude]);

    return <div className="main">
        Your country: {country}  
        Your temp: {temp}
        <Icon source={CirclePlusMinor} 
        backdrop={true} 
        onClick={onSelectCity} 
        />
    </div>
}

export default Main;