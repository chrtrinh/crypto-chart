import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar__top">
				<h4>Cryptocurrencies: 8,071</h4>
				<h4>Market Cap: 8,071</h4>
				<h4>Markets: 38,071</h4>
				<h4>24h Vol: 8,071</h4>
				<h4>BTC Dominance: 66.8%</h4>
			</div>
			<div className="navbar__bottom">
				<div className="navbar__logo">
					<Link to="/">
						<img
							src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg?_=c6b5620"
							alt="company logo"
						/>
					</Link>
				</div>

				<div className="navbar__links">
					<Link to="/">Cryptocurrencies</Link>
					<Link to="/">Exchanges</Link>
					<Link to="/">Products</Link>
					<Link to="/">Tools</Link>
					<Link to="/">Learn</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
