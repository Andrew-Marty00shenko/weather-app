import React, {useCallback, useEffect, useState} from 'react';
import { Autocomplete} from '@shopify/polaris';
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import actionsWeather from "../redux/actions/weather-action";
import actionsSelected from "../redux/actions/selected-action";

export default function AutocompleteExample() {
  const [deselectedOptions, setDeselectedOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState(deselectedOptions);
  const inputValue = useSelector(state=> state.selectedReducer.currentWeather, shallowEqual);
  const dispatch = useDispatch();

    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(res=> {
            const options = res.data.map(c=>{
                return {
                    value: c.capital,
                    label: c.capital
                }
            });
            setDeselectedOptions(options);
        })
    },[]);

  const updateText = useCallback(
    (e) => {
        console.log(e)
      dispatch(actionsSelected.onChangeInputValue(e));

      if (e === '') {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(e, 'i');
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex),
      );
      setOptions(resultOptions);
    },
    [deselectedOptions],
  );

  const updateSelection = useCallback(
    (selected) => {
      dispatch(actionsWeather.fetchWeatherByCityName(selected[0]));
      setSelectedOptions(selected);
      dispatch(actionsSelected.onChangeInputValue(selected[0]));
    },
    [options],
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Tags"
      value={inputValue}
      placeholder="Search"
    />
  );

  return (
    <div style={{height: '225px'}}>
      <Autocomplete
        options={options}
        selected={selectedOptions}
        onSelect={updateSelection}
        textField={textField}
      />
    </div>
  );
}
