import React, {Component} from "react";
import styled from 'styled-components';
import ListProducts from './ListProducts';
const AppContainer =styled('div')`
  text-align:center;
  margin: 50px;

`;
const Title=styled.h1`
  color:blue;
`;

class App extends Component {
  state={
    page:1,
    size:8,
    hide:false
  }
  showMore=()=>{
    const {page,size} =this.state;
    this.setState(state=>({
      ...state,
      page:state.page+1
    }))
    this.props.fetchData(page+1,size);
    
  }
  componentDidMount(){
    const {page,size}= this.state;
    this.props.fetchData(page,size); 
    
  }
  render(){
    const {products, totalCount} = this.props
    
    return (
      <AppContainer>
        <Title>Product Listings</Title>
        <ListProducts products={products} totalCount={totalCount}
        showMore={this.showMore} hide={this.state.hide} />
      </AppContainer>
    );
  }
}

export default App;
