import { weatherApi } from "../../api/api";

const actions = {
    setWeatherData: data=>({
        type: 'WEATHER:SET_DATA',
        payload: data
    }),
    setFindCityWeather: data=>({
        type: 'WEATHER:SET_FIND_CITY_WEATHER',
        payload: data
    }),
    fetchWeatherByLocation: (latitude,longitude)=>dispatch=>{
        return weatherApi.getWeatherByLocation(latitude,longitude)
        .then(data=>{
            dispatch(actions.setWeatherData(data.data));
        });
    },
    fetchWeatherByCityName: (city)=>dispatch=>{
        return weatherApi.getWeatherByCityName(city)
        .then(data=>{
            dispatch(actions.setFindCityWeather(data.data));
        })
    }
};

export default actions;