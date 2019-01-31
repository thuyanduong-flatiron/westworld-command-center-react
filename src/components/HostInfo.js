import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {

  toggle = () => {
    this.props.onToggleHost(this.props.host.id)
  }

  render(){
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={/* pass in the right image here */this.props.host.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.host.firstName} | { this.props.host.gender==='Male' ? <Icon name='man' /> : <Icon name='woman' />}
                { /* Think about how the above should work to conditionally render the right First Name and the right gender Icon */ }
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.props.host.active ? "Active":"Decommissioned" /* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
                  checked={this.props.host.active? true : false /* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
                  slider
                />
              </Card.Meta>

            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
