import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'

import HostInfo from './HostInfo'

const Details = () => {

  // We'll render the logo if no host is selected.
  //But if a host does get selected, what should you render????
  const renderSomething = () => (
    <Image size='medium' src={Images.westworldLogo}/>
  )

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details
