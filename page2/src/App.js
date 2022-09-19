import './App.css';
import './font/Graphik-Regular.ttf';
import zero from './imgic/Pri1.png';
import ten from './imgic/Pri2.png';
import nine from './imgic/Pri3.png';
function App() {
  return (
    <div className="App" >
      <div className="text" >
        <h2>Pricing</h2>
        <p>Mosst calendars are designed for teams.</p>
        <p> State is designed for freelancers</p>
      </div>
      <div className='ver'>
          <div className="icon"><img src = {zero} alt='' /></div>
          <div className="icon"><img src = {ten} alt='' /></div>
          <div className="icon"><img src = {nine} alt='' /></div>
      </div>
    </div>
    
  );
}

export default App;
