import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
   
    <Navbar title ="First app"/>
    <div className="container my-3" >
    <Textform heading ="Enter your text"/>
    </div>
    
  </>
  );
}

export default App;
