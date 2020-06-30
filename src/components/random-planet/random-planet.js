import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-servis';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import  './random-planet.css';

export default class RandomPlanet extends Component {

   static defaultProps = {
      updateInterval: 10000
   }

   static propTypes = {
      updateInterval: PropTypes.number
   }

   swapiService = new SwapiService();

   state = {
      planet: {},
      loading: true,
      error: false
   };

   componentDidMount() {
      const { updateInterval } = this.props;
      this.updatePlanet();
      this.interval = setInterval(this.updatePlanet, updateInterval);
   }

   componentWillUnmount() {
      clearInterval(this.interval);
   }

   onPlanetLoaded = (planet) => {
      this.setState({planet, loading: false});
   };

   onError = (err) => {
      this.setState({
         error: true,
         loading: false
      });
   }

   updatePlanet = () => {
      const id = Math.floor( (Math.random() * 17) + 2 );
      this.swapiService.getPlanet(id)
         .then(this.onPlanetLoaded)
         .catch(this.onError);
   };

   render() {
      const { planet, loading, error } = this.state;
      const hasData = !(loading || error)
      const spinner = loading ? <Spinner /> : null;
      const errorIndicator = error ? <ErrorIndicator /> : null;
      const content = hasData ? <PlanetView planet={planet}/> : null;

      return (
         <div className="random-planet">
            {spinner}
            {errorIndicator}
            {content}
         </div>
      
      )
   };
}

const PlanetView = ({planet}) => {
   const {id, name, population, rotationPeriod, diameter} = planet;

   return (
      <React.Fragment>
         <img className="random-planet__img" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
         <div className="random-planet__info-block">
            <h2 className="random-planet__name">{name}</h2>
            <span className="random-planet__info">Population: {population}</span>
            <span className="random-planet__info">Rotation Period: {rotationPeriod}</span>
            <span className="random-planet__info">Diameter: {diameter}</span>
         </div>
      </React.Fragment>
   )
}