import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import Welcome from './components/Welcome';
import State from './components/State'
import Count from './components/Count'
import FunctionCLick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Eventbinding from './components/EventBinding'
import ParentComponent from './components/ParentCompoonent';
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import Form from "./components/Form"
import Refsample from './components/Refsample';
import PortalSample from './components/PortalSample';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary heroName= "Batman"/>
      <ErrorBoundary heroName= "Superman"/>
      <ErrorBoundary heroName= "Joker"/>

      {/* <PortalSample/> */}
      {/* <Refsample /> */}
      {/* <Form /> */}
      {/* <Inline /> */}
      {/* <Stylesheets className={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <Eventbinding /> */}
      {/* <ClassClick /> */}
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
