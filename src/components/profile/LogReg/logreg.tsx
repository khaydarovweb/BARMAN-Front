import React, { Component, useState } from 'react';
import './LogReg.css';
import userImg from './Assets/person.png';
import passwordImg from './Assets/password.png';
import emailImg from './Assets/email.png';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
export function LogReg() {
	const [action, setAction] = useState('Sign Up');
	return (
		<>
		<Link to="/"><button className='goBack'>Go to home page</button></Link>
			<div className="container">
				<div className="header">
					<div className="text">{action}</div>
					<div className="underline"></div>
				</div>
				<div className="inputs">
					{action === 'Login' ? (
						<div></div>
					) : (
						<div className="input">
							<img src={userImg} alt="" />
							<input type="text" placeholder="Username" />
						</div>
					)}
					<div className="input">
						<img src={emailImg} alt="" />
						<input type="email" placeholder="Email" />
					</div>
					<div className="input">
						<img src={passwordImg} alt="" />
						<input type="password" placeholder="Password" />
					</div>
				</div>
				{action === 'Sign Up' ? (
					<div></div>
				) : (
					<div className="forgot-password">
						Lost Password? <span>Click Here</span>
					</div>
				)}
				<div className="submit-container">
					<div
						className={action === 'Login' ? 'submit gray' : 'submit'}
						onClick={() => {
							setAction('Sign Up');
						}}
					>
						Sign UP
					</div>
					<div
						className={action === 'Sign Up' ? 'submit gray' : 'submit'}
						onClick={() => {
							setAction('Login');
						}}
					>
						Login
					</div>
				</div>
			</div>
		</>
	);
}
