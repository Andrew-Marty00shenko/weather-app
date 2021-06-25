import axios from "axios"

const API_KEY = '21b22bf6016e6373a1a8623132015d79';

export const weatherApi = {
    getWeatherByLocation(lat, lon){
        try{
            return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        }catch (err){
            console.log(err)
        }
    },
    getWeatherByCityName(city){
        try{
            return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        }catch (err){
            console.log(err)
        }
    },
};