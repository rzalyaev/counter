import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './Counter.module.css';
import {Button} from '../Button/Button';
import {Settings} from "../Settings/Settings";

export type CounterPropsType = {

};

const Counter: FC<CounterPropsType> = () => {
    const initialMaxValue: number = 10;
    const initialMinValue: number = 0;

    const [count, setCount] = useState<number>(initialMinValue);
    const [maxValue, setMaxValue] = useState<number>(initialMaxValue);
    const [minValue, setMinValue] = useState<number>(initialMinValue);
    const newMaxValue = useRef<HTMLInputElement>(null);
    const newMinValue = useRef<HTMLInputElement>(null);
    const [areSettingsOpen, setAreSettingsOpen] = useState<boolean>(false);

    useEffect(() => {
        const currentValue = localStorage.getItem('currentValue');
        currentValue && setCount(JSON.parse(currentValue));

        const minValueAsString = localStorage.getItem('minValue');
        minValueAsString && setMinValue(JSON.parse(minValueAsString));

        const maxValueAsString = localStorage.getItem('maxValue');
        maxValueAsString && setMaxValue(JSON.parse(maxValueAsString));
    }, []);

    useEffect(() => {
        localStorage.setItem('currentValue', JSON.stringify(count));
    }, [count]);

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('minValue', JSON.stringify(minValue));
    }, [maxValue, minValue]);

    const plus = () => setCount((prevState) => prevState + 1);
    const minus = () => setCount((prevState) => prevState - 1);
    const reset = () => setCount(minValue);

    const changeMaxValue = () => {
        if (newMaxValue.current) {
            newMaxValue.current.valueAsNumber >= 0 && setMaxValue(newMaxValue.current.valueAsNumber);
            newMaxValue.current.valueAsNumber = 0;
            setCount(0);
        }
    };

    const changeMinValue = () => {
        if (newMinValue.current) {
            newMinValue.current.valueAsNumber >= 0 && setMinValue(newMinValue.current.valueAsNumber);
            setCount(newMinValue.current.valueAsNumber);
            newMinValue.current.value = '';
        }
    };

    const changeSettingsStatus = () => {
        setAreSettingsOpen(!areSettingsOpen);
    };


    const isButtonDisabled = (name: string) => {
        switch (name) {
            case '+':
                return count === maxValue;
            case '-':
            case 'RESET':
                return count === 0 || count === minValue;
            default:
                return false;
        }
    };

    const displayClassName =
        count < maxValue || count === 0 ? styles.display : styles.disabledDisplay;

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.counter} ${areSettingsOpen ? styles.counterWithSettings : ''}`}>
                {count === maxValue && (<p className={styles.maxValue}>You have reached the maximum value!</p>)}
                <div className={displayClassName}>{count}</div>
                <div className={styles.buttons}>
                    <Button
                        name={'+'}
                        disabled={isButtonDisabled('+')}
                        onClick={plus}
                    />
                    <Button
                        name={'-'}
                        disabled={isButtonDisabled('-')}
                        onClick={minus}
                    />
                    <Button
                        name={'RESET'}
                        disabled={isButtonDisabled('RESET')}
                        onClick={reset}
                    />
                </div>
                <div className={styles.settingsButtonWrapper}>
                    <Button name={'SETTINGS'} onClick={changeSettingsStatus}/>
                </div>
            </div>
            <div className={areSettingsOpen ? styles.settingsAreOpen : styles.settingsAreClose}>
                <Settings areOpen={areSettingsOpen}
                          newMaxValue={newMaxValue}
                          changeMaxValue={changeMaxValue}
                          newMinValue={newMinValue}
                          changeMinValue={changeMinValue}
                />
            </div>
        </div>
    );
};

export default Counter;