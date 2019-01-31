import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

class WestworldMap extends React.Component {
  constructor(){
    super()
    this.state = {
      areas: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:4000/areas`)
    .then(res => res.json())
    .then(areas => {
      this.setState({areas})
    })
  }

  render(){
    return (
      <Segment id="map" >
        {this.state.areas.map(area => <Area key={area.id} area={area} hosts={this.props.hosts} onClickHost={this.props.onClickHost}/>)}
      </Segment>
    )
  }

}

export default WestworldMap
