import React, { Component } from 'react';
import Die from './Die';
import './RolleDice.css';

const dies = ['one', 'two', 'three', 'four', 'five', 'six'];
class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faceDieOne: 'one',
      faceDieTwo: 'one',
      rolling: false,
    };
    this.roll = this.roll.bind(this);
  }
  roll(e) {
    let rand = Math.floor(Math.random() * dies.length);
    let rand2 = Math.floor(Math.random() * dies.length);
    this.setState({
      faceDieOne: dies[rand],
      faceDieTwo: dies[rand2],
      rolling: true,
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className='RolleDice'>
        <div className='d-flex justify-content-center'>
          <Die face={this.state.faceDieOne} rolling={this.state.rolling} />
          <div className='mx-4'></div>
          <Die face={this.state.faceDieTwo} rolling={this.state.rolling} />
        </div>
        <button
          className='RolleDice-btn'
          onClick={this.roll}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? 'Rolling...' : 'Roll'}
        </button>
      </div>
    );
  }
}

export default RollDice;
