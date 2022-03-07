import styles from '../styles/Button.module.css'
import { ReactComponent as Dice } from '../assets/images/icon-dice.svg'
import { useState } from 'react'

const Button = ({ fetchAdvice, setAdvice }) => {
  const [loading, setLoading] = useState(false)

  async function handleCLick() {
    setLoading(true)
    setAdvice(await fetchAdvice())
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    loading === false
      ? <button onClick={handleCLick} className={styles.button}><Dice /></button>
      : <button disabled onClick={handleCLick} className={styles.button}><Dice /></button>
  )



}

export default Button