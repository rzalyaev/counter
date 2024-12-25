import React, {ChangeEvent} from 'react';
import styles from './Settings.module.css';
import Button from "../../Button/Button";
import Input from "../../Input/Input";

type Props = {
    minValue: number
    maxValue: number
    error: string
    changeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    openCounter: () => void
}

export const Settings = ({minValue, maxValue, error, changeMinValue, changeMaxValue, openCounter}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.minValue}>
                <span>Min value:</span>
                <Input type={'number'} value={minValue.toString()} onChange={changeMinValue}/>
            </div>
            <div className={styles.maxValue}>
                <span>Max value:</span>
                <Input type={'number'} value={maxValue.toString()} onChange={changeMaxValue}/>
            </div>
            <Button onClick={openCounter} disabled={error !== ''} className={styles.quitButton}>BACK TO COUNTER</Button>
        </div>
    );
};