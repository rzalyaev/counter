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
        <div className={styles.settingsWrapper}>
            <div className={styles.setting}>
                <Input type={'number'} newValue={newMaxValue} placeholder={'Enter new max value'}/>
                <Button name={'SET MAX VALUE'} onClick={changeMaxValue}/>
            </div>
            <div className={styles.setting}>
                <Input type={'number'} newValue={newMinValue} placeholder={'Enter new min value'}/>
                <Button name={'SET MIN VALUE'} onClick={changeMinValue}/>
            </div>
        </div>
    );
};