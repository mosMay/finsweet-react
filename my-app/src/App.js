import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Focus from './components/Focus/Focus';
import Process from './components/Process/Process';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Focus></Focus>
      <Process></Process>

    </div>
    // <div className="App">
    //   <header className="App-header">

    //     <h1>Welcome React Project</h1>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
