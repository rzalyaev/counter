import React from 'react';
import styles from "../Counter.module.css";
import {Button} from "../../Button/Button";

type PropsType = {
    count: number
    minValue: number
    maxValue: number
    showSettings: boolean
    increase: () => void
    decrease: () => void
    reset: () => void
    changeSettingsState: () => void
}

export const Controls = ({count, minValue, maxValue, showSettings, increase,
                             decrease, reset, changeSettingsState}: PropsType) => {
    return (
        <div className={styles.buttons}>
            <Button name={'INC'}
                    disabled={count === maxValue || showSettings}
                    onClick={increase}
            />
            <Button name={'DEC'}
                    disabled={count === 0 || count === minValue || showSettings}
                    onClick={decrease}
            />
            <Button name={'RESET'}
                    disabled={count === 0 || count === minValue || showSettings}
                    onClick={reset}
            />
            <Button name={'SETTINGS'}
                    className={styles.settingsButtonWrapper}
                    onClick={changeSettingsState}
            />
        </div>
    );
};