import React, {Component} from 'react';

import  './item-details.css';
//import SwapiService from '../../services/swapi-servis';
import Spinner from "../spinner";
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';


const Record = ({item, field, label}) => {
   return (
      <span>{label}: {item[field]} </span>
   )
}

export default class ItemDetails extends Component {

   state = {
      item: null,
      image: null,
      loading: false,
      error: false
   }

   componentDidMount() {
      this.updateItem();
   }

   componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId ||
         this.props.getData !== prevProps.getData ||
         this.props.getImageUrl !== prevProps.getImageUrl) {

         this.updateItem();
      }
   }

   componentDidCatch() {
      this.setState({error: true, loading: false});
   }

   onItemLoaded = (item) => {
      this.setState({item, image: this.props.getImageUrl(item), loading: false});
   }

   onError = () => {
      this.setState({error: true, loading: false});
   }

   updateItem() {
      const { itemId, getData } = this.props;

      if (!itemId) {
         return;
      }
      
      this.setState({loading: true});

      getData(itemId)
         .then(this.onItemLoaded)
         .catch(this.onError);
   }

   render() {
      const { item, image, loading, error } = this.state;
      if (!item) {
         return <span className="item-details__asking">Select an item from the list</span>;
      }
      
      const hasData = !(loading || error)
      const spinner = loading ? <Spinner /> : null;
      const errorIndicator = error ? <ErrorIndicator /> : null;
      const content = hasData ? (
         <React.Fragment>
            <img  className="item__img" src={image}
                  alt="item" />
            <div className="item__info-block">
               <h2>{item.name}</h2>
                  {
                     React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, { item });
                     })
                  }
               <ErrorButton />
            </div>
         </React.Fragment>
         ) : null;

      return (
         <div className="item-details">
            {spinner}
            {errorIndicator}
            {content}
         </div>
      )
   }   
};

export {Record};