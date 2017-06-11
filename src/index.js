import './Utils/Styles/index.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './store';
import {render} from 'react-dom';
import { routes } from './router';
import 'bulma/css/bulma.css';

render((
	<Provider store={Store}>
		{routes}
	</Provider>), document.getElementById('root'));
