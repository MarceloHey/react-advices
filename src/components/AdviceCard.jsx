import styles from '../styles/AdviceCard.module.css'
import Advice from './Advice'
import Button from './Button'
import { fetchAdvice } from '../api'
import { useState } from 'react'
import { useEffect } from 'react'


import { useRef } from 'react';

const AdviceCard = () => {
  const [advice, setAdvice] = useState({})
  const [loading, setLoading] = useState(false)
  const buttonRef = useRef(null);

  useEffect(async () => {
    const advice = await fetchAdvice()
    setAdvice(advice)
  }, [])

  async function handleClick() {
    const el = buttonRef.current
    setLoading(true)
    setAdvice(await fetchAdvice())
    if (el) {
      el.addEventListener('animationend', () => {
        setLoading(false)
        el.removeEventListener('animationend', () => { })
      })
    }


  }

  return (
    <div key={advice} className={styles.wrapper}>
      <Advice advice={advice} />
      <Button ref={buttonRef} className="btn" loading={loading} handleClick={handleClick} fetchAdvice={fetchAdvice} setAdvice={setAdvice} />
    </div>
  )
}

export default AdviceCard