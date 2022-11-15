import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.style.css'

type Props = {}

const Header: React.FC<Props> = (props) => {
  return (
    <div className="header" >
      Header
      <NavLink to="/air/billerName">Biller</NavLink>
    </div>
  )
}

export default Header