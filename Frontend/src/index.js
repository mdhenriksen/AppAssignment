import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import CreateCompany from './components/CreateCompany';
import CompanyList from './components/CompanyList';
import EditCompany from './components/EditCompany';
import AddOwner from './components/AddOwner';
import CompanyDetails from './components/CompanyDetails';
import Navbar from './components/Navbar';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import stores from './stores/'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
<Provider {...stores}>
    <Router>
    <Navbar />
    <Switch>
        <Route path="/" exact component={CreateCompany} />
        <Route path="/create" exact component={CreateCompany} />
        <Route path="/list" exact component={CompanyList} />
        <Route path="/details/:id" component={CompanyDetails} />
        <Route path="/edit/:id" component={EditCompany} />
        <Route path="/owner/:id" component={AddOwner} />

    </Switch>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
