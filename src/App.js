import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import Welcome from './components/Welcome';
import State from './components/State'
import Count from './components/Count'
import FunctionCLick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <ClassClick />
      {/* <FunctionCLick /> */}
      {/* <Count /> */}
      {/* <State /> */}
      {/* <Greet name="Bill" heroName = "Batman">
        <p>This is children</p>
      </Greet>
      <Greet name="Ben" heroName = "Superman"/>
      <Greet name="Jamey" heroName = "Wonderwomen"/> */}
      {/* <Welcome name="Bill" heroName = "Batman"/>
      <Welcome name="Ben" heroName = "Superman"/>
      <Welcome name="Jamey" heroName = "Wonderwomen"/> */}
    </div>
  );
}

export default App;
