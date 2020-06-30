import React from 'react';

import ItemsList from '../items-list';
import { 
   withData,
   withSwapiService,
   withChildFunction,
   compose
} from '../hoc-helpers';


const renderName = ({ name }) => <span>{name}</span>;

const mapPersonMethods = (swapiService) => {
   return {
      getData: swapiService.getAllPeople
   };
};

const mapPlanetMethods = (swapiService) => {
   return {
      getData: swapiService.getAllPlanets
   };
};

const mapStarshipMethods = (swapiService) => {
   return {
      getData: swapiService.getAllStarships
   };
};

const PeopleList = compose(
                     withSwapiService(mapPersonMethods),
                     withData,
                     withChildFunction(renderName)
                   )(ItemsList);

const PlanetsList = compose(
                     withSwapiService(mapPlanetMethods),
                     withData,
                     withChildFunction(renderName)
                    )(ItemsList);

const StarshipsList = compose(
                        withSwapiService(mapStarshipMethods),
                        withData,
                        withChildFunction(renderName)
                     )(ItemsList);

export {
   PeopleList,
   PlanetsList,
   StarshipsList
};