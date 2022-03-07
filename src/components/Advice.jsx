import styles from '../styles/Advice.module.css'

const Advice = ({ advice }) => {
  return (
    advice
    && <div key={advice.id} className={styles.advice}>
      <div className={styles.adviceCode}>Advice #{advice.id}</div>
      <div className={styles.adviceText}>{advice.advice}</div>
    </div>

  )
}

export default Advice