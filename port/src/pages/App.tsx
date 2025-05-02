import duck from './images/duck.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className = 'duckin' src="https://i.natgeofe.com/k/327b01e8-be2e-4694-9ae9-ae7837bd8aea/mallard-male-swimming_square.jpg?wp=1&w=136&h=136"  alt="duckin" />
        <p>
          Hi my name is Thomas Nguyen and I think Ducks are really cool! if you want to learn more about ducks go here!
        </p>
        <p>
        <a href = "https://kids.nationalgeographic.com/animals/birds/facts/mallard-duck" 
        target='_blank' 
        rel = "noopener noreferrer">
          Click here!
        </a>
        </p>

      </header>
    </div>
  );
}

export default App;
