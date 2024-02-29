import React from 'react'
import '../Sidebar/Sidebar.css'
import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import foto from '../../assets/yotas.jpg'
import logo from '../../assets/logoSena.png'
import { Networks } from '../Networks/Networks'

export const Sidebar = () => {
  return (
    <div>
    <Logo img={foto}/>
    <h3>Sebastian Agudelo</h3>
    <Navbar/>
    <Logo img={logo}/>
    <Networks/>

    </div>
  )
}
