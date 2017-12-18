import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    week: [],
    events: [
      { day: 'Mon Dec 18 2017', name: 'boxing' },
      { day: 'Tue Dec 19 2017', name: 'yoga' },
      { day: 'Tue Dec 19 2017', name: 'lifting weights' },
      { day: 'Wed Dec 20 2017', name: 'spin class' },
      { day: 'Thu Dec 21 2017', name: 'abc class' },
      { day: 'Fri Dec 22 2017', name: 'friday class' },
      { day: 'Sat Dec 23 2017', name: 'saturday class' },
    ]
  }

  matchEvents = (day) => {
    return this.state.events.filter(event => {
      return event.day === day
    })
  }

  createWeek = () => {
    const today = new Date();
    const week = []
    for (let i = 0; i < 7; i++) { 
        week.push(new Date(today.getFullYear(), today.getMonth(), today.getDate() + i).toDateString())
      }
    this.setState({
      week: week
    })
  }

  render() {
    const { week } = this.state;
    return (
      <div className="App">
        { 
          week.map(day => <TitleDate day={day} events={this.matchEvents(day)} />)
        }
      </div>
    );
  }

  componentDidMount(){
    this.createWeek()
  }
}

const TitleDate = ({day, events}) => {
  return (
    <div>
      <p>{day}</p>
      {events.map(event => event.day === day ? <p>{event.name}</p> : <p></p>)}
    </div>
  )
}


export default App;
