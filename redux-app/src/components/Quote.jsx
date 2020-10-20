import React from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';

const Quote = (props) => {

  return (
  <div>  
    <h2>{props.test}</h2>
    <button onClick={props.getQuote}>Get New Quote</button>
  </div>
  )
};

const mapStateToProps = (state) => {
 return {test: state.test}
};

const mapDispatchToProps = { getQuote };

export default connect(mapStateToProps, mapDispatchToProps)(Quote);