import './App.css';
import AdviceCard from './components/AdviceCard';

function App() {
  return (
    <div className="App">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
      }}>
        <h1 className='title'>Want a piece of advice ? <br /> Give it a go !</h1>
        <AdviceCard />
      </div>
    </div>
  );
}

export default App;
