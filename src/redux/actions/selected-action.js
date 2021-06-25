const actions = {
    onSelectedCities: (city)=>({
        type: 'CITY:SELECT_CITY',
        payload: city
    }),
    onChangeInputValue: (value)=>({
        type: 'CITY:INPUT_VALUE',
        payload: value
    })
}

export default actions;