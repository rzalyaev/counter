import React from 'react';
import styles from './Counter.module.css';
import {Display} from "./Display/Display";
import {Controls} from "./Controls/Controls";
import {CounterStateType} from "../../reducers/counter-reducer";

export type PropsType = {
    counter: CounterStateType
    increase: () => void
    decrease: () => void
    reset: () => void
    changeSettingsState: () => void
};

const Counter = ({counter, ...restProps}: PropsType) => {

    return (
        <div className={`${styles.counter} ${counter.showSettings ? styles.counterWithSettings : ''}`}>
            <Display count={counter.count}
                     minValue={counter.minValue}
                     maxValue={counter.maxValue}
                     showSettings={counter.showSettings}
                     error={counter.error}
            />
            <Controls count={counter.count}
                      minValue={counter.minValue}
                      maxValue={counter.maxValue}
                      showSettings={counter.showSettings}
                      {...restProps}
            />
        </div>
    );
};

export default Counter;