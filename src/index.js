import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AddBlog from './Components/AddBlog';
import NewBlogs from './Components/NewBlogs';

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

import NavBar from './Components/NavBar';



import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


import createBrowserHistory from 'history/createBrowserHistory';

const  history =createBrowserHistory();

ReactDOM.render(
	//<App />, 
	<Router>
		<div>
			<NavBar/>

			<hr />

			<Route exact path="/" component={App}/>
			<Route exact path="/login"  history={history}/>
			<Route exact path="/onlineblogs" component={NewBlogs}/>

		</div>
	</Router>,
	document.getElementById('root')
	);
registerServiceWorker();
