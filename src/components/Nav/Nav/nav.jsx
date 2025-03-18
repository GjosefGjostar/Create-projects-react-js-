import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './nav.module.css'


const Nav = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to='/Profile'> Profile </NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/Messages'>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/News'>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/Music'>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/Settings'>Settings</NavLink>
			</div>
		</nav>
	)
}

export default Nav