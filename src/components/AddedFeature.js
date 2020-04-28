import React from 'react';
import { connect } from 'react-redux';
import { addFeatures,removeFeatures } from "../actions/index"

const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick = {() => props.removeFeatures(props.feature)}>X</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state =>{
  return {
    state
  };
}

export default connect(mapStateToProps, {addFeatures, removeFeatures})(AddedFeature);
