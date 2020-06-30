import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
   return class extends Component {

      state = {
         data: null,
         loading: true,
         error: false
      };

      componentDidMount() { 
         this.update();
      };

      componentDidUpdate(prevProps) {
         if (this.props.getData !== prevProps.getData ) {
            this.update();
         }
      }

      update () {
         this.props.getData()
            .then(this.onListLoaded)
            .catch(this.onError);
      }
   
      onListLoaded = (data) => {
         this.setState({data,
                        loading: false
         });
      }

      onError = (err) => {
         this.setState({
            error: true,
            loading: false
         });
      }
   
      render() {
         const { data, loading, error } = this.state;
         const hasData = !(loading || error)
         const spinner = loading ? <Spinner /> : null
         const errorIndicator = error ? <ErrorIndicator /> : null;
         const items = hasData ? <View { ...this.props } data={ data } /> : null;
   
         return (
            <ul className="items-list">
               {spinner}
               {errorIndicator}
               {items}
            </ul>
         )
      };
   }
}

export default withData;