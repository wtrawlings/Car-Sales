import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  //console.log("this thing", props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state =>{
  console.log("THIS:", state)
  return {
    additionalPrice: state.car.additionalPrice,
    additionalFeatures: state.car.additionalFeatures,
    car: state.car
  };
}

export default connect(mapStateToProps, {})(AddedFeatures);