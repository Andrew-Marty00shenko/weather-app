const initialState = {
    selectedCities: [],
    inputValue: " "
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'CITY:SELECT_CITY':
            return {
                ...state,
                selectedCities: [...state.selectedCities, payload],
            };
        case 'CITY:INPUT_VALUE':
            return {
                ...state,
                inputValue: payload,
            };
        default:
            return state;
    }
}