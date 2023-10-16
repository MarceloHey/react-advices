import styles from '../styles/Button.module.css'
import { forwardRef } from 'react';
import { ReactComponent as Dice } from '../assets/images/icon-dice.svg'

const Button = forwardRef(({ handleClick, loading }, ref) => {
  return (
    <button ref={ref} onClick={handleClick} className={`${styles.button} ${loading && styles.loading}`}><Dice />{loading}</button>
  )

})

export default Button