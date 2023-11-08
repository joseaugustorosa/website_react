
import './App.css';
import Header from './components/header'
import Name from './components/name'
import Sobre from './components/sobremim'
import Experiencia from './components/experiencia'
function App() {  
  return (
    <div className="App">
      <Header></Header>
      <Name/>
      <Sobre/>
      <Experiencia/>
    </div>
  );
}

export default App;
