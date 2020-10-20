const initialState = {
  quote: "",
  loading: false
};
const randomNum = () => Math.floor(Math.random() * 266)

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_QUOTE_START":
      return {
        ...state,
        loading: true
      }
    case "FETCHING_QUOTE_SUCCESS":
      return {
        ...state,
        quote: action.payload[randomNum()].text,
        loading: false
      }
    case "FETCHING_QUOTE_FAILURE":
      return {
        ...state,
        loading: false
      }
    
    default:
      return state;
  }
}