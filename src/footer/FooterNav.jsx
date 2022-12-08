import React, { Component } from 'react'
import data from './footerData.json'
import './Footer.css'
export default class FooterNav extends Component {
  render() {
    return (
      <nav className='footernav'>
        <ul>
         {data.map(item=>(item?.img ? <img src={item.img} alt="" key={item.id}/> : <li key={item.id}>{item.name}</li> ))}
        </ul>  
        <hr/>
      </nav>
      
    )
  }
}
