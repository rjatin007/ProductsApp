import action_constants from "../actions/action_constants";
const initialState = {
  products:[],
  totalCount:0,
}
const rootReducer = (state = {}, action) => {
  switch(action.type){
    case action_constants.FECTH_DATA:
      return {
        ...state,
        products:state.products && state.products.length >0 ? state.products.concat(action.payload.data):action.payload.data ,
        totalCount:action.payload.totalCount
      }
  }
  return state;
};

export default rootReducer;
