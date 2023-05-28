import React from 'react';
import styles from './Counter.module.css';
import {Display} from "./Display/Display";
import {Controls} from "./Controls/Controls";

export type PropsType = {
    count: number
    minValue: number
    maxValue: number
    showSettings: boolean
    error: string
    increase: () => void
    decrease: () => void
    reset: () => void
    changeSettingsState: () => void
};

const Counter = ({count, minValue, maxValue, showSettings, error, ...restProps}: PropsType) => {

    return (
        <div className={`${styles.counter} ${showSettings ? styles.counterWithSettings : ''}`}>
            <Display count={count}
                     minValue={minValue}
                     maxValue={maxValue}
                     showSettings={showSettings}
                     error={error}
            />
            <Controls count={count}
                      minValue={minValue}
                      maxValue={maxValue}
                      {...restProps}
            />
        </div>
    );
};

export default Counter;