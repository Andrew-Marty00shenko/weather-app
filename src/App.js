import { usePosition } from "./utils/usePosition";

import Header from "./components/Header";
import Main from "./components/Main";
import SearchField from "./components/SearchField";
import SelectedCities from "./components/SelectedCities";

const App = () =>{
    return <div className="wrapper">
        <Header/>
        <Main/>
        <SelectedCities/>
        <SearchField/>
    </div>
}

export default App;