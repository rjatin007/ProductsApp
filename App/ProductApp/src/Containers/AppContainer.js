import {connect} from 'react-redux';
import App from '../Components/App';
import {fetchAllData} from '../store/actions/actions_creator';
const mapStateToProps=state=>({
    products:state.products,
    totalCount:state.totalCount
})
const mapDispatchToProps=dispatch=>({
    fetchData:(page,size)=>dispatch(fetchAllData(page,size))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);