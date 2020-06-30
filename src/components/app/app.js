import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './app.css';
import { SwapiServiceProvider } from '../swapi-service-context';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-servis';
import DummySwapiService from '../../services/dummy-swapi-service';
import {PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage} from '../pages';

export default class App extends Component {

   state = {
      hasError: false,
      selectedItem: null,
      swapiService: new SwapiService(),
      isLoggedIn: false
   }

   onLogin = () => {
      this.setState({
         isLoggedIn: true
      });
   }

   onServiceChange = () => {

      this.setState( ( {swapiService} ) => {
         if (swapiService instanceof SwapiService) {
            return {
               swapiService: new DummySwapiService()
            };
         } else {
            return {
               swapiService: new SwapiService()
            };
         };   
      });
   }

   onItemSelected = (id) => {
      this.setState( {selectedItem: id } );
   }

   render() {

      return (
         <ErrorBoundry>
            <SwapiServiceProvider value={this.state.swapiService} >
               <Router>
                  <div className="app">
                     <Header onServiceChange={this.onServiceChange} />
                     <RandomPlanet updateInterval={10000}/>
                     <ErrorButton />
                     <Switch>
                        <Route path="/"
                              render={() => <h2 className="main-titel">Welcome to StarDB</h2>}
                              exact />
                        <Route path="/people/:id?" component={PeoplePage} />
								<Route path="/planets/:id?" component={PlanetsPage} />
								<Route path="/starships/:id?" component={StarshipsPage} />
                        <Route path="/login"
                              render={() => <LoginPage isLoggedIn={this.state.isLoggedIn}
                                                       onLogin={this.onLogin} />} />
                        <Route path="/secret"
                              render={() => <SecretPage isLoggedIn={this.state.isLoggedIn} />} />

                        <Route render={() => <p>Page is not found</p>} />
                     </Switch>
                  </div>
               </Router>
            </SwapiServiceProvider>
         </ErrorBoundry>
      )
   };
};