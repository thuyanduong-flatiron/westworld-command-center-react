import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';

class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  constructor(){
    super()
    this.state = {
      hosts: [],
      selectedHost: null
    }
  }

  componentDidMount(){
    fetch(`http://localhost:4000/hosts`)
    .then(res =>res.json())
    .then(hosts => {
      this.setState({hosts})
    })
  }

  onClickHost = (hostId) => {
    let findHost = this.state.hosts.find(host => host.id === hostId)
    this.setState({
      selectedHost: findHost
    })
  }

  onToggleHost = (hostId) => {
    let copyOfHost = [...this.state.hosts]
    let host = copyOfHost.find(host => host.id === hostId)
    host.active = !host.active
    this.setState({hosts: copyOfHost})
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap hosts={this.state.hosts} onClickHost={this.onClickHost}/>
        <Headquarters
          hosts={this.state.hosts}
          onClickHost={this.onClickHost}
          selectedHost={this.state.selectedHost}
          onToggleHost={this.onToggleHost}
        />
      </Segment>
    )
  }
}

export default App;
