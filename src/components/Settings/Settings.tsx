import React, {FC, RefObject} from 'react';
import styles from './Settings.module.css';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

type SettingsPropsType = {
    areOpen: boolean
    newMaxValue: RefObject<HTMLInputElement>,
    changeMaxValue: () => void,
    newMinValue: RefObject<HTMLInputElement>,
    changeMinValue: () => void,
}

export const Settings: FC<SettingsPropsType> = ({
                                                    newMaxValue,
                                                    changeMaxValue,
                                                    newMinValue,
                                                    changeMinValue,
                                                    areOpen
                                                }) => {
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