import React from 'react';
import styles from './Display.module.css';

type Props = {
    count: number
    minValue: number
    maxValue: number
    settingsMode: boolean
    error: string
}

export const Display = ({count, minValue, maxValue, settingsMode, error}: Props) => {
    const countDisplayClassName = `${styles.countDisplay} ${error ? styles.error : ''} ${count === maxValue ? styles.maxValueReached : ''}`;
    return (
        <div className={styles.container}>
            {!settingsMode && <div className={styles.minMaxValues}>
              <div>min: {minValue}</div>
              <div>max: {maxValue}</div>
            </div>}
            <div className={countDisplayClassName}>
                {error ? error : count}
            </div>
        </div>
    );
};