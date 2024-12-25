import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {Controls} from "./components/Controls/Controls";

function App() {
    const defaultMinValue = 0;
    const localStorageMinValueKey = 'minValue';
    const localStorageMinValue = localStorage.getItem(localStorageMinValueKey);
    const getMinValueFromLS = () => localStorageMinValue ? JSON.parse(localStorageMinValue) : defaultMinValue;

    const defaultMaxValue = 5;
    const localStorageMaxValueKey = 'maxValue';
    const localStorageMaxValue = localStorage.getItem(localStorageMaxValueKey);
    const getMaxValueFromLS = () =>localStorageMaxValue ? JSON.parse(localStorageMaxValue) : defaultMaxValue;

    const [count, setCount] = useState<number>(0);
    const [minValue, setMinValue] = useState<number>(getMinValueFromLS());
    const [maxValue, setMaxValue] = useState<number>(getMaxValueFromLS());
    const [error, setError] = useState<string>('');
    const [settingsMode, setSettingsMode] = useState<boolean>(false);

    useEffect(() => {
        if (localStorageMinValue) {
            setMinValue(JSON.parse(localStorageMinValue));
            setCount(JSON.parse(localStorageMinValue));
        }
        localStorageMaxValue && setMaxValue(JSON.parse(localStorageMaxValue));
    }, [localStorageMinValue, localStorageMaxValue]);

    useEffect(() => {
        if (minValue >= 0 && minValue < maxValue) {
            localStorage.setItem(localStorageMinValueKey, JSON.stringify(minValue));
        }
        if (maxValue > minValue) {
            localStorage.setItem(localStorageMaxValueKey, JSON.stringify(maxValue));
        }
    }, [minValue, maxValue]);

    const increment = () => setCount(prevState => prevState + 1);
    const decrement = () => setCount(prevState => prevState - 1);
    const reset = () => setCount(minValue);
    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value);
        setCount(newValue);
        setMinValue(newValue);
        if (newValue >= 0 && newValue < maxValue) {
            setError('');
        } else {
            setError('Invalid value!');
        }
    }
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value);
        setMaxValue(newValue);
        if (newValue > minValue && newValue > 0 && minValue >= 0) {
            setError('');
        } else {
            setError('Invalid value!');
        }
    }
    const openSettings = () => setSettingsMode(true);
    const openCounter = () => setSettingsMode(false);

    return (
        <div className={'App'}>
            <div className={'container'}>
                <Display count={count} minValue={minValue} maxValue={maxValue} settingsMode={settingsMode}
                         error={error}/>
                <Controls count={count} minValue={minValue} maxValue={maxValue} settingsMode={settingsMode}
                          error={error} increment={increment} decrement={decrement} reset={reset}
                          changeMinValue={changeMinValue} changeMaxValue={changeMaxValue} openSettings={openSettings}
                          openCounter={openCounter}/>
            </div>
        </div>
    )
}

export default App;