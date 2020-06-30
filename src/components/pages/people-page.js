import React from 'react';
import { withRouter } from 'react-router-dom'


import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { PeopleList, PersonDetails } from '../sw-components';

const PeoplePage = ( { history, match } ) => {
   const { id } = match.params;

   return (
      <ErrorBoundry>
         <Row left={<PeopleList onItemSelected={ (id) => history.push(id)} />} 
              right={<PersonDetails itemId={id} />} />
      </ErrorBoundry>
   )
}

export default withRouter(PeoplePage);