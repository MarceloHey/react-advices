import AdviceCard from './components/AdviceCard';
import "./styles/global.css";
import styles from './styles/App.module.css'


function App() {
  return (
    <div className="App">
      <div className={styles.appContent}>
        <h1 style={{
          marginBottom: '60px',
          color: '#a9a9a9',
          fontWeight: 500
        }}>Want a piece of advice ? <br /> <b>Roll the dice !</b></h1>
        <AdviceCard />
      </div>
    </div>
  );
}

export default App;
