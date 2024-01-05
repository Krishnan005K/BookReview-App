
import React, { Component } from 'react';
import loader from '../assets/images/loader_1.gif'
function Loader()
{
  return(
    <div className='wrapper'>
      <img src={loader} style={{
        width:'200px',height:'200px',
        marginTop:'10px',
        marginLeft:'620px'
      }}/>
    </div>
  )
}
const WithLoading = (WrappedComponent) => {
  return class WithLoadingComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      // Simulate loading delay with setTimeout
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 500); // Adjust the delay time as needed
    }

    render() {
      const { isLoading } = this.state;

      return isLoading ? <Loader/>: <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLoading;