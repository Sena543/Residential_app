import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

//components
import Registration from './components/register.js';
import Homepage from './components/homepage.js';
import Login from './components/login.js';
import HallRegistration from './components/hallRegistration.js'

class App extends Component{


    componentDidMount(){
        axios.get('http://localhost:3001/')
        .then(response =>{
            console.log(response);
        })
    }



    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Homepage}/>
                        <Route path='/registration' exact component={Registration}  />
                        <Route path='/login' exact component={Login} />
                        <Route path='/hallRegistration' component={HallRegistration}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
