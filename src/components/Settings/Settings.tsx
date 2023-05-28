import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './Settings.module.css';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

type PropsType = {
    minValue: number
    maxValue: number
    showSettings: boolean
    changeMinValue: (value: number) => void
    changeMaxValue: (value: number) => void
    changeSettingsState: () => void
    changeErrorText: (errorText: string) => void
}

const Settings = ({minValue, maxValue, showSettings, changeMinValue, changeMaxValue, changeSettingsState,
                      changeErrorText}: PropsType) => {
    const [newMinValue, setNewMinValue] = useState<number>(minValue);
    const [newMaxValue, setNewMaxValue] = useState<number>(maxValue);

    // input sync with minValue or maxValue
    useEffect(() => setNewMinValue(minValue), [minValue]);
    useEffect(() => setNewMaxValue(maxValue), [maxValue]);

    // input onChange handlers
    const changeNewMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinValueFromInput = e.currentTarget.valueAsNumber;
        newMinValueFromInput >= newMaxValue
            ? changeErrorText('Min value must be less than max value')
            : newMinValueFromInput < 0
                ? changeErrorText('Min value must be more or equal 0')
                : changeErrorText('')
        setNewMinValue(newMinValueFromInput);
    }
    const changeNewMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValueFromInput = e.currentTarget.valueAsNumber;
        newMaxValueFromInput <= newMinValue
            ? changeErrorText('Max value must be more than min value')
            : changeErrorText('')
        setNewMaxValue(newMaxValueFromInput);
    }

    const saveSettings = () => {
        changeMinValue(newMinValue);
        changeMaxValue(newMaxValue);
        changeSettingsState();
    }

    const settingsClassName = `${styles.settingsWrapper} ${showSettings ? styles.open : ''}`

    const buttonDisableCondition = newMinValue < 0 || newMaxValue < 0 || newMaxValue <= newMinValue;

    return (
        <div className={settingsClassName}>
            <fieldset className={styles.setting}>
                <legend>Min value</legend>
                <Input type={'number'}
                       value={newMinValue}
                       className={styles.clearInput}
                       onChange={changeNewMinValue}
                />
            </fieldset>
            <fieldset className={styles.setting}>
                <legend>Max value</legend>
                <Input type={'number'}
                       value={newMaxValue}
                       onChange={changeNewMaxValue}
                />
            </fieldset>
            <Button className={styles.setButton}
                    name={'SET'}
                    disabled={buttonDisableCondition}
                    onClick={saveSettings}
            />
        </div>
    );
};