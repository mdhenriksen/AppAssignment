import React from 'react';
import { BeatLoader } from 'react-spinners';
 

 
class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading' style={{ marginTop: 50 }}>
        <BeatLoader
          sizeUnit={"px"}
          size={50}
          color={'#919191'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default Loader;