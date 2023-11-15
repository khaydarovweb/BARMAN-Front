import React, { Component } from 'react';
import './header.css';
import { default as CartBtn } from './cartIcon/cart';
import { default as ProfileBtn } from './perofileIcon/profile';
import { default as ProductBtn } from './productIcon/productIcon';
import { LogoNoBg } from '../../imgs/index';
import { Link } from 'react-router-dom';
class Header extends Component {
	render() {
		return (
			<header>
				<ul>
					<li>
						<Link className="link" to="/">
						<img src={LogoNoBg} alt="" className="logoImg" />
						</Link>
					</li>
				</ul>
				<span className="NavBarBtns">
				<button className="">
						<ProductBtn />
						<Link to="/products">Products</Link>
					</button>
					<button className="">
						<CartBtn />
						<Link to="/cart">Cart</Link>
					</button>
					<button className="">
						<ProfileBtn />
						<Link to="/profile">Profile</Link>
					</button>
				</span>
			</header>
		);
	}
}

export default Header;
