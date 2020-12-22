import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/cryptocurrencies" component={Home} />
				<Route path="/exchanges" component={Home} />
				<Route path="/products" component={Home} />
				<Route path="/tools" component={Home} />
			</Switch>
		);
	}
}

export default Routes;
