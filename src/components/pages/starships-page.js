import React from 'react';
import { withRouter } from 'react-router-dom'

import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { StarshipsList, StarshipDetails } from '../sw-components';

const StarshipsPage = ( { history, match } ) => {
   const { id } = match.params;

   return (
      <ErrorBoundry>
         <Row left={<StarshipsList onItemSelected={ (id) => history.push(id)} />} 
              right={<StarshipDetails itemId={id} />} />
      </ErrorBoundry>
   )
}

export default withRouter(StarshipsPage);