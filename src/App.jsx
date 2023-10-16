import AdviceCard from './components/AdviceCard';
import "./styles/global.css";


function App() {
  return (
    <div className="App">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        maxWidth: '100vw',
        width: '100%',
        backgroundColor: '#222222',
        fontFamily: 'Helvetica',
      }}>
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
