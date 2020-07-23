import React, {Component} from 'react';
import './Counter.css'
import PropTypes from 'prop-types'


class Counter extends Component{

    constructor(){
        super()

        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this)
        this.dcrement = this.dcrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    render(){
    return (
        <div className="counter">
        <CounterButton by={1} incrementMethod={this.increment} dcrementMethod={this.dcrement}/>
        <CounterButton by={1} incrementMethod={this.increment} dcrementMethod={this.dcrement}/>
        <CounterButton by={5} incrementMethod={this.increment} dcrementMethod={this.dcrement}/>
        <CounterButton by={10} incrementMethod={this.increment} dcrementMethod={this.dcrement}/>
        <span className="count">{this.state.counter}</span>
        <div><button className="reset" onClick={this.reset}>Reset</button></div>
      </div>
          );
    }

    reset(){
        this.setState({counter : 0})
    }

    increment(by){
        //console.log(`increment from parent - ${by}`);
        this.setState(
            (prevState)=>{
            return {counter : prevState.counter + by}
        }
        )
    }

    dcrement(by){
        this.setState(
            (prevState)=>{
            return {counter : prevState.counter - by}
        }
        )
    }
}


class CounterButton extends Component{

    constructor(){
        super()

        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this)
        this.dcrement = this.dcrement.bind(this)
    }

    render(){
        return (
            <div className="Counter">
                      <button onClick={this.increment}>+{this.props.by}</button>
                      <button onClick={this.dcrement}>-{this.props.by}</button>
                      {/*<span className="count">{this.state.counter}</span>*/}
            </div>
          );
    }

    increment(){
        //console.log('increment');
        // this.setState({
        //     counter : this.state.counter+this.props.by
        // })

        this.props.incrementMethod(this.props.by);
    }

    dcrement(){
        this.props.dcrementMethod(this.props.by);
    }
}

CounterButton.defaultProps ={
    by : 1
}

CounterButton.propTypes ={
    by : PropTypes.number
}

export default Counter