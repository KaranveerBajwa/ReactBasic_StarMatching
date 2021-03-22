import './App.css';

function App() {
  return (
    <div className="App">
     <div className="displayItems">
     {Array.from({length: 9}, (item, index) => index).map(starId =>
      <div key={starId} className="star"></div>
      )}
      </div>
     <div className="displayItems">
     {Array.from({length: 9}, (item, index) => index).map(number =>
      <div key={number} className="number">{number + 1}</div>
      )}
      </div>
  </div>
  );
}

export default App;
