import { shallowEqual, useSelector } from "react-redux";

const SelectedCities = () => {
    const selectedCities = useSelector(state => state.selectedReducer.selectedCities, shallowEqual);
    localStorage.setItem("cities", selectedCities);

    return <div>
        <p>Favorites:</p>
        {selectedCities.map((c, i) => (
            <div key={i}>{c}</div>
        ))}
    </div>
}

export default SelectedCities;