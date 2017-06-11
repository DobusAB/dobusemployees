import * as React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from './Scenes/Layout';
import Tim from './Scenes/Tim';
import Johan from './Scenes/Johan';
import Viman from './Scenes/Viman';
import Alice from './Scenes/Alice';
import Tobias from './Scenes/Tobias';


export const routes = (
	<Router history={browserHistory}>
		<Route component={App}>
			<Route path="/" component={Tim} />
			<Route path="/tim" component={Tim}/>
			<Route path="/johan" component={Johan} />
			<Route path="/viman" component={Viman} />
			<Route path="/alice" component={Alice} />
			<Route path="/tobias" component={Tobias} />

		</Route>
	</Router>
);