import { LogIn } from './pages/LogIn';
import { SignUp } from './pages/SignUp';
import { NewIncome } from './pages/NewIncome';
import { NewOutflow } from './pages/NewOutflow';
import { MyEntries } from './pages/MyEntries';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={LogIn} exact />
				<Route path="/cadastro" component={SignUp} exact />
				<Route path="/registros" component={MyEntries} exact />
				<Route path="/entrada" component={NewIncome} exact />
				<Route path="/saida" component={NewOutflow} exact />
			</Switch>
		</Router>
	);
};

export { App };
