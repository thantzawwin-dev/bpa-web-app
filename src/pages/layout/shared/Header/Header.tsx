import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.style.css'
import { CompanyName } from 'assets'

type Props = {}

const Header: React.FC<Props> = (props) => {
  return (
    <div className="header theme-header">
      <div>
        <img src={CompanyName} alt="Channel Logo" />
      </div>
      <NavLink to="air/billerName">Biller</NavLink>
    </div>
  )
}

export default Header
