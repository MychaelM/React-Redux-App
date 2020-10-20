import React from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';

const Quote = (props) => {

  return (
  <div>  
    <h2>Cat Fact: {props.quote}</h2>
    <button onClick={props.getQuote}>Get New Quote</button>
  </div>
  )
};

const mapStateToProps = (state) => {
 return {
   quote: state.quote,
   loading: state.loading
 }
};

const mapDispatchToProps = { getQuote };

export default connect(mapStateToProps, mapDispatchToProps)(Quote);