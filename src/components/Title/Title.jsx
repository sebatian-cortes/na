import React from 'react'
import { Logo } from '../Logo/Logo'
import logo1  from '../../assets/logoSena.png'
import '../Title/Title.css'



export const Title = ({write}) => {
  return (
    <div className='title'>
        <Logo img={logo1}/>
        <h1>{write}</h1>
    </div>
  )
}
