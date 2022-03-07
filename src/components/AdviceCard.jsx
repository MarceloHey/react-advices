import styles from '../styles/AdviceCard.module.css'
import Advice from './Advice'
import Button from './Button'
import { fetchAdvice } from '../api'
import { useState } from 'react'
import { useEffect } from 'react'


const AdviceCard = () => {
  const [advice, setAdvice] = useState({})

  useEffect(async () => {
    const advice = await fetchAdvice()
    setAdvice(advice)
  }, [])

  return (
    <div key={advice} className={styles.wrapper}>
      <Advice advice={advice} />
      <Button fetchAdvice={fetchAdvice} setAdvice={setAdvice} />
    </div>
  )
}

export default AdviceCard