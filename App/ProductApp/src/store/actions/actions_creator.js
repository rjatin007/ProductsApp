import action_constants from "./action_constants";
import {fetchData} from '../API';
export const fetchAllData = (page,size) => {
  return dispatch=>{
    fetchData(page,size).then(res=>{
      dispatch({
        type: action_constants.FECTH_DATA,
        payload:res
      })
    }).catch=(e)=>{
      console.log(e)
    }
  };
};
