import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

const App = () => {
    const initialMinValue = 0;
    const initialMaxValue = 5;

    const [count, setCount] = useState<number>(initialMinValue);
    const [minValue, setMinValue] = useState<number>(initialMinValue);
    const [maxValue, setMaxValue] = useState<number>(initialMaxValue);
    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const minValueAsString = localStorage.getItem('minValue');
        minValueAsString && setMinValue(JSON.parse(minValueAsString));

        const maxValueAsString = localStorage.getItem('maxValue');
        maxValueAsString && setMinValue(JSON.parse(maxValueAsString));
    }, []);

    useEffect(() => localStorage.setItem('minValue', JSON.stringify(minValue)), [minValue]);
    useEffect(() => localStorage.setItem('maxValue', JSON.stringify(maxValue)), [maxValue]);

    const increase = () => {count < maxValue && setCount(count + 1)};
    const decrease = () => {count > minValue && setCount(count - 1)};
    const reset = () => setCount(minValue);

    const changeMinValue = (newMinValue: number) => {
        if (newMinValue >= 0 && newMinValue < maxValue) {
            setMinValue(newMinValue);
            setCount(newMinValue);
        }
    }
    const changeMaxValue = (newMaxValue: number) => {newMaxValue > minValue && setMaxValue(newMaxValue)};

    const changeSettingsState = () => setShowSettings(!showSettings);

    const changeErrorText = (errorText: string) => setError(errorText);

    return (
        <div className='App'>
            <Counter count={count}
                     minValue={minValue}
                     maxValue={maxValue}
                     showSettings={showSettings}
                     error={error}
                     increase={increase}
                     decrease={decrease}
                     reset={reset}
                     changeSettingsState={changeSettingsState}
            />
            <Settings minValue={minValue}
                      maxValue={maxValue}
                      showSettings={showSettings}
                      changeMinValue={changeMinValue}
                      changeMaxValue={changeMaxValue}
                      changeSettingsState={changeSettingsState}
                      changeErrorText={changeErrorText}
            />
        </div>
    );
};

export default App;
