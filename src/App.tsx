import React, {ChangeEvent, useEffect, useReducer} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {Controls} from "./components/Controls/Controls";
import {
    changeCountAC,
    changeMaxValueAC,
    changeMinValueAC,
    counterReducer,
    createErrorAC,
    decrementAC,
    incrementAC, closeSettingsAC, openSettingsAC,
    resetAC,
    State, initialState
} from "./reducers/counterReducer";

function App() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const count = state.count;
    const minValue = state.minValue;
    const maxValue = state.maxValue;
    const error = state.error;
    const settingsMode = state.settingsMode;

    const changeCount = (count: number) => dispatch(changeCountAC(count));
    const increment = () => dispatch(incrementAC());
    const decrement = () => dispatch(decrementAC());
    const reset = () => dispatch(resetAC());
    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinValue = Number(e.currentTarget.value);
        dispatch(changeMinValueAC(newMinValue));
        if (newMinValue >= 0 && newMinValue < maxValue) {
            dispatch(createErrorAC(''));
        } else {
            dispatch(createErrorAC('Invalid value!'));
        }
    };
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(e.currentTarget.value);
        dispatch(changeMaxValueAC(newMaxValue));
        if (newMaxValue > minValue && newMaxValue > 0 && minValue >= 0) {
            dispatch(createErrorAC(''));
        } else {
            dispatch(createErrorAC('Invalid value!'));
        }
    };
    const openSettings = () => dispatch(openSettingsAC());
    const closeSettings = () => dispatch(closeSettingsAC());

    const localStorageMinValueKey = 'minValue';
    const localStorageMinValue = localStorage.getItem(localStorageMinValueKey);

    const localStorageMaxValueKey = 'maxValue';
    const localStorageMaxValue = localStorage.getItem(localStorageMaxValueKey);

    useEffect(() => {
        localStorageMinValue && dispatch(changeMinValueAC(JSON.parse(localStorageMinValue)));
        localStorageMaxValue && dispatch(changeMaxValueAC(JSON.parse(localStorageMaxValue)));
    }, []);

    useEffect(() => {
        if (minValue >= 0 && minValue < maxValue) {
            localStorage.setItem(localStorageMinValueKey, JSON.stringify(minValue));
        }
        if (maxValue > minValue) {
            localStorage.setItem(localStorageMaxValueKey, JSON.stringify(maxValue));
        }
    }, [minValue, maxValue]);

    useEffect(() => {
        changeCount(minValue);
    }, [minValue]);

    return (
        <div className={'App'}>
            <div className={'container'}>
                <Display count={count} minValue={minValue} maxValue={maxValue} settingsMode={settingsMode}
                         error={error}/>
                <Controls count={count} minValue={minValue} maxValue={maxValue} settingsMode={settingsMode}
                          error={error} increment={increment} decrement={decrement} reset={reset}
                          changeMinValue={changeMinValue} changeMaxValue={changeMaxValue} openSettings={openSettings}
                          openCounter={closeSettings}/>
            </div>
        </div>
    )
}

export default App;