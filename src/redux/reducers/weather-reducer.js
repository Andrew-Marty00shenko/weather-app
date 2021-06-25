const initialState = {
    currentWeather: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'WEATHER:SET_DATA':
            return {
                ...state,
                currentWeather: payload,
            };
        case 'WEATHER:SET_FIND_CITY_WEATHER':
            return {
                ...state,
                currentWeather: payload,
            };  
        default:
            return state
    }
}