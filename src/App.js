import { useLayoutEffect,useRef } from 'react';
import styles from './App.module.css';

const App = ()=> {

  const inputGroupRef = useRef();
  const inputRef = useRef();

  useLayoutEffect(()=>{
    const {current} = inputRef;

    const handleFocus = ()=>{
      return inputGroupRef.current.classList.add(styles.active);
    };
    const handleBlur = ()=>inputGroupRef.current.classList.remove(styles.active);

    current.addEventListener('focus', handleFocus);
    current.addEventListener('blur', handleBlur);

    return ()=>{
      current.removeEventListener('focus', handleFocus);
      current.removeEventListener('blue', handleBlur);
    }
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.inputGroup} ref={inputGroupRef}>
        <label className={styles.label}>
          Your Name:
        </label>
        <input
        className={styles.input}
        type="text"
        ref={inputRef}
        autoComplete="off"/>
        <div className={styles.border}></div>
      </div>
    </div>
  )
}

export default App;
