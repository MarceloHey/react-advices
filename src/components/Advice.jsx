import styles from '../styles/Advice.module.css'

const Advice = ({ advice }) => {
  return (
    advice
    && <div key={advice.id} className={styles.advice}>
      <div className={styles.adviceCode}>Advice #{advice.id || 0}</div>
      <div className={styles.adviceText}>{advice.advice || 'Here is an incredible advice for you ;)'}</div>
    </div>

  )
}

export default Advice