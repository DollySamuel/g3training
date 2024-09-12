import './App.css';
import Card from './components/Card';
import minionImage from './assets/minion.jpg'
import littleMargo from './assets/littleMargo.jpg'
import Mona from './assets/Mona.jpg'


function App() {

  const cardData = [
    {
      
      altText : "Card one",
      image : minionImage,
      title : "Minion",
      text : "I am a Minion"
    },
    {
      altText : "Card two",
      image : littleMargo,
      title : "Margo",
      text : "I am a Margo"
    },
    {
      altText : "Card three",
      image : Mona,
      title : "Mona",
      text : "I am Mona"
    },

  ]
  return (
    <div>
      <Card data = {cardData}/>
    </div>
  );
}

export default App;
