import React, {useEffect} from 'react';
import styles from './Counter.module.css';
import {Button} from "./components/Button/Button";
import {
  changeCountAC,
  changeMaxValueAC,
  changeStartValueAC,
  incrementAC,
  resetAC,
  StateType,
  toggleMaxValueErrorAC,
  toggleSettingsModeAC,
  toggleStartValueErrorAC
} from "./redux/reducers/counterReducer";
import {Settings} from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";

const Counter = () => {
  const state = useSelector<AppRootStateType, StateType>(state => state.counter);
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementAC());
  const reset = () => dispatch(resetAC());
  const toggleSettingsMode = () => dispatch(toggleSettingsModeAC());
  const changeCount = (newCountValue: number) => dispatch(changeCountAC(newCountValue));
  const changeStartValue = (newStartValue: number) => dispatch(changeStartValueAC(newStartValue));
  const changeMaxValue = (newMaxValue: number) => dispatch(changeMaxValueAC(newMaxValue));
  const toggleStartValueError = (newValue: boolean) => dispatch(toggleStartValueErrorAC(newValue));
  const toggleMaxValueError = (newValue: boolean) => dispatch(toggleMaxValueErrorAC(newValue));
  const handleCloseButtonOnClick = () => {
    toggleSettingsMode();
    state.count < state.startValue && reset();
  }

  // UseEffect hooks ---------------------------------------------------------------------------------------------------
  const countValue = 'countValue';
  const startValue = 'startValue';
  const maxValue = 'maxValue';
  useEffect(() => {
    const localStorageCountValue = localStorage.getItem(countValue);
    localStorageCountValue && changeCount(JSON.parse(localStorageCountValue));

    const localStorageStartValue = localStorage.getItem(startValue);
    localStorageStartValue && changeStartValue(JSON.parse(localStorageStartValue));

    const localStorageMaxValue = localStorage.getItem(maxValue);
    localStorageMaxValue && changeMaxValue(JSON.parse(localStorageMaxValue));
  }, []);
  useEffect(() => {
    const localStorageCountValue = JSON.stringify(state.count);
    localStorage.setItem(countValue, localStorageCountValue);
  }, [state.count]);
  useEffect(() => {
    const localStorageStartValue = JSON.stringify(state.startValue);
    localStorage.setItem(startValue, localStorageStartValue);
  }, [state.startValue]);
  useEffect(() => {
    const localStorageMaxValue = JSON.stringify(state.maxValue);
    localStorage.setItem(maxValue, localStorageMaxValue);
  }, [state.maxValue]);

  // Class names -------------------------------------------------------------------------------------------------------
  const displayClassName: string = `${styles.display} ${state.count === state.maxValue && styles.maxCount}`;

  return (
    <div className={styles.wrapper}>
      {!state.settingsMode
          ? <div className={displayClassName}>{state.count}</div>
          : <Settings state={state}
                      changeStartValue={changeStartValue}
                      changeMaxValue={changeMaxValue}
                      toggleStartValueError={toggleStartValueError}
                      toggleMaxValueError={toggleMaxValueError}
          />
      }
      <div className={styles.buttonsWrapper}>
        {!state.settingsMode &&
            <Button title={'inc'}
                    onClickHandler={increment}
                    className={styles.button}
                    disabled={state.count === state.maxValue}
            />
        }
        {!state.settingsMode &&
            <Button title={'reset'}
                    onClickHandler={reset}
                    className={styles.button}
                    disabled={state.count === state.startValue}
            />
        }
        {state.settingsMode
            ? <Button title={'close'}
                     onClickHandler={handleCloseButtonOnClick}
                     className={styles.button}
                     disabled={state.startValueError || state.maxValueError}
            />
            : <Button title={'set'}
                      onClickHandler={toggleSettingsMode}
                      className={styles.button}
                      disabled={state.startValueError || state.maxValueError}
            />
        }
      </div>
    </div>
  );
}

export default Counter;