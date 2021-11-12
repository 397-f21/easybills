import logo from './logo.svg';
import './App.css';

const total_amount = 100;
const people_amount = 3;
const dish1 = 25;
const dish2 = 50;
const dish3 = 25;

const tip = total_amount * 0.20;
const user1 = dish1 / total_amount * tip + dish1;
// your share = (total+tip) / menu total * what you ordered
function App() {
  return (
    <div className="easyBills">

    </div>
  );
}

export default App;
