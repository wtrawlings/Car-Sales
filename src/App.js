import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';



const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures features = {props.features}/>
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  //console.log(state);
  return {
    //additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car,
    features: state.car.features
  };
}
//we are taking map state to props from here and adding it to main store
export default connect(mapStateToProps, {})(App);
//empty curly brackets means there is no action here that I want to use
//the actions are from other places.
