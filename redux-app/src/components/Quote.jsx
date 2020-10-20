import React from 'react';
import { connect } from 'react-redux';

const Quote = (props) => {

  return (
  <h2>{props.test}</h2>
  )
};

const mapStateToProps = (state) => {
 return {test: state.test}
};

export default connect(mapStateToProps)(Quote);