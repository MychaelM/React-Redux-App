import axios from 'axios';

export const getQuote = () => (dispatch) => {
  dispatch({type: "FETCHING_QUOTE_START"});
  axios
    .get(`https://cat-fact.herokuapp.com/facts`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err)
    });
};