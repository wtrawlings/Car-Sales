import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
const mapStateToProps = state =>{
  console.log("THIS:", state)
  return {
    //additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
    //car: state.car
  };
}

export default connect(mapStateToProps, {})(AdditionalFeatures);
