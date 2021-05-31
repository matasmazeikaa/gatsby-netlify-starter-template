import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';

const NAVIGATION_LINKS = [
	{ to: '/about', title: 'About' },
];

const Header = ({ data }) => (
	<header className="header">
		<img src="../../static/logo.svg" alt="Logo" />
		<nav>
			<ol>
				{NAVIGATION_LINKS.map((link) => (
					<li key={link.title}>
						<Link to={link.to}>{link.title}</Link>
					</li>
				))}
			</ol>
		</nav>
	</header>
);
export default Header;
