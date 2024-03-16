import React, {useState} from 'react';
import styles from './Counter.module.css';
import {Button} from "./components/Button/Button";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(prevState => prevState + 1);
  const reset = () => setCount(0);

  const incrementButtonClassName: string = `${styles.button} ${styles.incrementButton}`;
  const resetButtonClassName: string = `${styles.button} ${styles.resetButton}`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.display}>{count}</div>
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