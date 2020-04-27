import React from 'react';
import { connect } from 'react-redux';
import { removeFeatures } from "../actions/index"

const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick = {() => removeFeatures(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state =>{
  console.log("THIS:", state)
  return {
    state
  };
}

export default connect(mapStateToProps, {removeFeatures})(AddedFeature);
