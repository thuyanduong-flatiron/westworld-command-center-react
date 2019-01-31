import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = (props) => {

  const getHostsForThisArea = () => {
    return props.hosts.filter(host => host.area === props.area.name && host.active)
  }

  return (
    <div className='area' id={/* Pass in the area name here to make sure this is styled correctly */props.area.name}>
      <h3 className='labels'>{/* Don't just pass in the name from the data...clean that thing up */props.area.name}</h3>

      <HostList hosts={getHostsForThisArea()} onClickHost={props.onClickHost} />

    </div>
  )
}



function getPrettyName(uglyName){
  let wordArray = uglyName.split('_')
  wordArray = wordArray.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  return wordArray.join(' ')
}

export default Area;
