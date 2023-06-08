import React, {useEffect, useReducer} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {
    counterReducer,
    counterState,
    updateCountAC, updateErrorMessageAC,
    updateMaxValueAC,
    updateMinValueAC,
    updateShowSettingsAC
} from "./reducers/counter-reducer";

const App = () => {
    const [counter, dispatch] = useReducer(counterReducer, counterState);

    useEffect(() => {
        const minValueAsString = localStorage.getItem('minValue');
        minValueAsString && dispatch(updateMinValueAC(JSON.parse(minValueAsString)));
        minValueAsString && dispatch(updateCountAC(JSON.parse(minValueAsString)));

        const maxValueAsString = localStorage.getItem('maxValue');
        maxValueAsString && dispatch(updateMaxValueAC(JSON.parse(maxValueAsString)));
    }, []);

    useEffect(() => localStorage.setItem('minValue', JSON.stringify(counter.minValue)), [counter.minValue]);
    useEffect(() => localStorage.setItem('maxValue', JSON.stringify(counter.maxValue)), [counter.maxValue]);

    const increase = () => counter.count < counter.maxValue && dispatch(updateCountAC(counter.count + 1));
    const decrease = () => counter.count > counter.minValue && dispatch(updateCountAC(counter.count - 1));
    const reset = () => dispatch(updateCountAC(counter.minValue));

    const  changeMinValue = (newMinValue: number) => {
        dispatch(updateMinValueAC(newMinValue));
        dispatch(updateCountAC(newMinValue));
    }
    const changeMaxValue = (newMaxValue: number) => dispatch(updateMaxValueAC(newMaxValue));

    const changeSettingsState = () => dispatch(updateShowSettingsAC(!counter.showSettings));

    const changeErrorText = (errorText: string) => dispatch(updateErrorMessageAC(errorText));

    return (
        <div className='App'>
            <Counter counter={counter}
                     increase={increase}
                     decrease={decrease}
                     reset={reset}
                     changeSettingsState={changeSettingsState}
            />
            <Settings minValue={counter.minValue}
                      maxValue={counter.maxValue}
                      showSettings={counter.showSettings}
                      changeMinValue={changeMinValue}
                      changeMaxValue={changeMaxValue}
                      changeSettingsState={changeSettingsState}
                      changeErrorText={changeErrorText}
            />
        </div>
    );
};

export default App;
