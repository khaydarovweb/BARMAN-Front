import React, { Component } from 'react';
import './header.css';
import { default as CartBtn } from './cartIcon/cart';
import { default as  ProfileBtn} from './profileIcon/profile';
import { LogoNoBg } from '../../imgs/index';
import {Routes , Route , Link } from 'react-router-dom';
import { LogReg } from './LogReg/logreg';
class Header extends Component {
	render() {
		return (
			<header>
				<img src={LogoNoBg} alt="" className="logoImg" />
				<ul>
					<li>Home</li>
					<li>Menu</li>
					<li>Products</li>
				</ul>
				{/* <Routes>
					<Route path='/profile' element={<LogReg/>}/>
				</Routes> */}
				<span className='NavBarBtns'>
					<button className="">
						<CartBtn />
						Cart
					</button>
					<button className="">
						<ProfileBtn />
						<a href="/profile">Profile</a>
					</button>
				</span>
			</header>
		);
	}
	
}

export default Header;
