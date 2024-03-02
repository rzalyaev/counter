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
        <Button title={'increment'} onClickHandler={increment} className={incrementButtonClassName}/>
        <Button title={'reset'} onClickHandler={reset} className={resetButtonClassName}/>
      </div>
    </div>
  );
}

export default Counter;