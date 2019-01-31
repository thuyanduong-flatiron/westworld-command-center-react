import React from 'react';
import '../stylesheets/Host.css';
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  return(
    <Card
      className="host"
      onClick={ /* On Click what? */()=>{props.onClickHost(props.host.id)}}
      image={/* I wonder what goes here...*/props.host.imageUrl}
      raised
    />
  )
}

export default Host
