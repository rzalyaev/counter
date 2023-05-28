import React from 'react';
import styles from "../Counter.module.css";

type PropsType = {
    count: number
    minValue: number
    maxValue: number
    showSettings: boolean
    error: string
}

export const Display = ({count, minValue, maxValue, showSettings, error}: PropsType) => {
    const countClassName = count < maxValue || count === 0 ? styles.count : styles.disabledCount;

    return (
        showSettings
            ? <div className={styles.error}>
                {error ? error : <span className={styles.settingsMessage}>Change value and press SET</span>}
            </div>
            : <div>
                {count === maxValue && (<p className={styles.maxValueWarning}>You have reached the maximum value!</p>)}
                <div className={styles.display}>
                    <div className={styles.minMaxValues}>{minValue}</div>
                    <div className={countClassName}>{count}</div>
                    <div className={styles.minMaxValues}>{maxValue}</div>
                </div>
            </div>
    );
};