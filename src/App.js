import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
       <Home/>
      </div>
    </div>
  );
}


export default App;
// App.js is the root component.
// A component is just a function that returns a jsx template and then that function is exported at the bottom of the file.
