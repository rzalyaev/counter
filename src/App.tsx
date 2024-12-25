import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {Controls} from "./components/Controls/Controls";

function App() {
    const [count, setCount] = useState<number>(0);
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [error, setError] = useState<string>('');
    const [settingsMode, setSettingsMode] = useState<boolean>(false);

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