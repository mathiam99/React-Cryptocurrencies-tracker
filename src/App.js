import React, { Component } from 'react';
import Header from './components/header';
import {BrowserRouter, Route} from "react-router-dom";
import Cryptocurrency from './components/cryptocurrencies';
import Dashboard from './components/dashboard';
import AboutPage from './components/about'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Route exact path="/" component={Cryptocurrency}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/about" component={AboutPage}/>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default App;