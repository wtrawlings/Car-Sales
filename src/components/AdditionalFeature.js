import React from 'react';
import { addFeatures, removeFeatures, ADD_FEATURES } from "../actions/index";
import { connect } from "react-redux";

const AdditionalFeature = props => {
  return (
    <li>
      <button className="button" onClick = {() => props.addFeatures(props.feature)} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = state => {
  return {
    state
  };
}

export default connect(mapStateToProps, {addFeatures, removeFeatures})(AdditionalFeature);

