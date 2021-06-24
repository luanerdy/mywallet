import { LogIn } from './pages/LogIn';
import { SignUp } from './pages/SignUp';
import { NewIncome } from './pages/NewIncome';
import { NewOutflow } from './pages/NewOutflow';
import { MyEntries } from './pages/MyEntries';
import { UserContext } from './contexts/UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
	const [user, setUser] = useState();

	return (
		<Router>
			<Switch>
				<Route path="/" exact>
          <LogIn setUser={setUser} />
        </Route>
				<Route path="/cadastro" component={SignUp} exact />
				<UserContext.Provider value={{user, setUser}}>
					<Route path="/registros" component={MyEntries} exact />
					<Route path="/entrada" component={NewIncome} exact />
					<Route path="/saida" component={NewOutflow} exact />
				</UserContext.Provider>
			</Switch>
		</Router>
	);
};

export { App };
