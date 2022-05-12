import LiveSpace from './LiveSpace';
import './App.css';
import Filter from './Filter';
import Home from './Home';
import Header from './Header';



function App() {
  
    return (
      <div className='app__Header'>
      <Header />
      <div className="App">
        
        <LiveSpace />
        <Filter />
        <Home />
        
      </div>
    </div>
    );



  }
  

 
  

export default App;
