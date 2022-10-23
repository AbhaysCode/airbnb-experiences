import './App.css';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import Card from './components/Card.js';
import Data from './data.js';
console.log("Value of Data is",Data);

function App() {
  let cards = Data.map(elem=>{
    return (
      <Card
      key={elem.id}
      item={elem}
    />
    )
  })
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className="card-div">
        {cards}
    </div>
    </div>
  );
}

export default App;
