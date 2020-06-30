import React from 'react';
import { withRouter } from 'react-router-dom'

import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { PlanetsList, PlanetDetails } from '../sw-components';

const PlanetsPage = ( { history, match } ) => {
   const { id } = match.params;

   return (
      <ErrorBoundry>
         <Row left={<PlanetsList onItemSelected={ (id) => history.push(id)} />} 
              right={<PlanetDetails itemId={id} />} />
      </ErrorBoundry>
   )
}

export default withRouter(PlanetsPage);