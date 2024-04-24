import React from 'react';
import { NavLink } from 'react-router-dom';
import { styles } from '../styles';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to='/' className={`${styles.paddingXLogo} w-10, h-10, rounded-lg
        bg-white items-center opacity-75 justify-center flex font-bold shadow-md`}>
            <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
                <p className='text-slate-700 text-[18px] font-bold cursor-pointer flex'>
                  Zach Robertson&nbsp;
                  <span className="sm:block hidden">| Engineering & Software
                  </span></p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/about' className={({ isActive }) => isActive ? 
            'text-blue-500' : 'text-white'}>
                About
            </NavLink>
            <NavLink to='/projects' className={({ isActive }) => isActive ? 
            'text-blue-500' : 'text-white'}>
                Projects
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 
            'text-blue-500' : 'text-white'}>
                Contact
            </NavLink>
        </nav>

    </header> 
  )
}

export default Navbar