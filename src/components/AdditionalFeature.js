import React from 'react';
import { connect } from "react-redux";
import { addFeatures, removeFeatures } from "../actions/index";

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

