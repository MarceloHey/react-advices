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
        backgroundColor: '#222222',
        fontFamily: 'Helvetica',
      }}>
        <h1 style={{
          marginBottom: '60px',
          color: '#a9a9a9'
        }}>Want a piece of advice ? <br /> Give it a go !</h1>
        <AdviceCard />
      </div>
    </div>
  );
}

export default App;
