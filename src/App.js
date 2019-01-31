import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestWorldMap from './components/WestworldMap'
import HeadQuarters from './components/Headquarters'

class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  state = {
    hosts: []
  }

  componentDidMount(){
    fetch(`http://localhost:4000/hosts`)
    .then(res =>res.json())
    .then(hosts => {
      this.setState({hosts: hosts})
    })
  }

  render(){
    return (
      <Segment id='app'>
          <WestWorldMap hosts={this.state.hosts}/>
          <HeadQuarters hosts={this.state.hosts}/>
      </Segment>
    )
  }
}

export default App;
