import React, {ChangeEvent} from 'react';
import styles from './Settings.module.css';
import {StateType} from "../../reducers/counterReducer";

type SettingsPropsType = {
  state: StateType
  changeStartValue: (newStartValue: number) => void
  changeMaxValue: (newMaxValue: number) => void
  toggleStartValueError: (newValue: boolean) => void
  toggleMaxValueError: (newValue: boolean) => void
}

export const Settings = ({
                           state,
                           changeStartValue,
                           changeMaxValue,
                           toggleStartValueError,
                           toggleMaxValueError
                         }: SettingsPropsType) => {
  const handleChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.currentTarget.value) >= state.maxValue || Number(e.currentTarget.value) < 0) {
      if (!state.startValueError) {
        toggleStartValueError(true);
      }
    } else {
      if (state.startValueError) {
        toggleStartValueError(false);
      }
    }
    changeStartValue(Number(e.currentTarget.value));
    if (Number(e.currentTarget.value) < state.maxValue && state.maxValue > 0) {
      if (state.maxValueError) {
        toggleMaxValueError(false);
      }
    } else {
      if (!state.maxValueError) {
        toggleMaxValueError(true);
      }
    }
  };
  const handleChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.currentTarget.value) <= state.startValue || Number(e.currentTarget.value) < 0) {
      if (!state.maxValueError) {
        toggleMaxValueError(true);
      }
    } else {
      if (state.maxValueError) {
        toggleMaxValueError(false);
      }
    }
    changeMaxValue(Number(e.currentTarget.value));
    if (Number(e.currentTarget.value) > state.startValue && state.startValue >= 0) {
      if (state.startValueError) {
        toggleStartValueError(false);
      }
    } else {
      if (!state.startValueError) {
        toggleStartValueError(true);
      }
    }
  };
  const startValueInputClassName: string = `${styles.input} ${state.startValueError ? styles.errorInput : ''}`;
  const maxValueInputClassName: string = `${styles.input} ${state.maxValueError ? styles.errorInput : ''}`;
  return (
      <div className={styles.wrapper}>
        <div className={styles.setting}>
          <div className={styles.inputTitle}>Start value:</div>
          <div className={styles.inputWrapper}>
            {state.startValueError && <span className={styles.error}>Incorrect start value!</span>}
            <input type='number'
                   value={String(state.startValue)}
                   onChange={handleChangeStartValue}
                   className={startValueInputClassName}
            />
          </div>
        </div>
        <div className={styles.setting}>
          <div className={styles.inputTitle}>Max value:</div>
          <div className={styles.inputWrapper}>
            {state.maxValueError && <span className={styles.error}>Incorrect max value!</span>}
            <input type='number'
                   value={String(state.maxValue)}
                   onChange={handleChangeMaxValue}
                   className={maxValueInputClassName}
            />
          </div>
        </div>
      </div>
  );
};