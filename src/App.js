import logo from './logo.svg';
import './App.css';

function App() {
  const arabicText = "مرحبا بالعالم"; // Replace with your Arabic text
  return (
    <div className="App">
      <div dir="rtl" className="card">
        {arabicText}
      </div>
      <div className="container">
        <div className="item">yo</div>
        <div className="item">loren ipsum</div>
        <div className="item">loren ipsum and something</div>
        <div className="item">yo.....</div>
      </div>
    </div>
  );
}

export default App;
