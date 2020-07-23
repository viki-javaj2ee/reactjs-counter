import React, {Component} from 'react';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import FourthComponent from './components/learning-examples/FourthComponent'
import Counter from './components/counter/CounterButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
    }
}

class LearningCompoents extends Component {
  render() {
    return (
      <div className="LearningCompoents">
        Learning Components !!!
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent/>
      </div>
    );
  }
}

export default App;