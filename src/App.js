import Cards from './components/Card.js'
import Logo from './components/Logo.js'
import './App.css';


    function App() {

      let titles = [
     1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
        ].sort(() =>  Math.random() - 0.5)

      return (
        <div className="App">
            <Logo />
            <Cards titles={titles} />
        </div>
      );
    }

    export default App;
