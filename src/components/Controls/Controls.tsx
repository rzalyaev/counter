import React, {ChangeEvent} from 'react';
import styles from './Controls.module.css';
import {Settings} from "./Settings/Settings";
import Button from "../Button/Button";

type Props = {
    count: number
    minValue: number
    maxValue: number
    settingsMode: boolean
    error: string
    increment: () => void
    decrement: () => void
    reset: () => void
    changeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    openSettings: () => void
    openCounter: () => void
}

export const Controls = ({
                             count,
                             minValue,
                             maxValue,
                             settingsMode,
                             error,
                             increment,
                             decrement,
                             reset,
                             changeMinValue,
                             changeMaxValue,
                             openSettings,
                             openCounter
                         }: Props) => {
    return (
        <div className={styles.container}>
            {!settingsMode
                ? <>
                    <div className={styles.counterControls}>
                        <Button onClick={increment}
                                disabled={count === maxValue || error !== ''}
                                className={styles.incrementButton}>+
                        </Button>
                        <Button onClick={decrement}
                                disabled={count === minValue || error !== ''}
                                className={styles.decrementButton}>-
                        </Button>
                        <Button onClick={reset} className={styles.resetButton}>RESET</Button>
                    </div>
                    <div className={styles.settingsControls}>
                        <Button onClick={openSettings} className={styles.settingsButton}>SETTINGS</Button>
                    </div>
                </>
                : <Settings minValue={minValue} maxValue={maxValue} error={error} changeMinValue={changeMinValue}
                            changeMaxValue={changeMaxValue} openCounter={openCounter}/>
            }
        </div>
    );
};