import axios from 'axios';

export const getQuote = () => (dispatch) => {
  dispatch({type: "FETCHING_QUOTE_START"});
  axios
    .get(`https://cat-fact.herokuapp.com/facts`)
    .then(res => {
      console.log(res.data.all);
      dispatch({type: "FETCHING_QUOTE_SUCCESS", payload: res.data.all});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: "FETCHING_QUOTE_FAILURE", payload: err})
    });
};