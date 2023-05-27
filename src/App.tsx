import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

const App = () => {
    const [count, setCount] = useState<number>(0);
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(10);
    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const minValueAsString = localStorage.getItem('minValue');
        const minValueAsNumber = minValueAsString && JSON.parse(minValueAsString);
        setMinValue(minValueAsNumber);

        const maxValueAsString = localStorage.getItem('maxValue');
        const maxValueAsNumber = maxValueAsString && JSON.parse(maxValueAsString);
        setMaxValue(maxValueAsNumber);
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
