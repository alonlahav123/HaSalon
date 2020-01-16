import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
export  class FacebookFeed extends Component {
  render() {
    return (
      <FacebookProvider appId="2184589704978013">
        <Page href="https://www.facebook.com/hasaloncop/?eid=ARCBchcJq9DokkpN3bobIhSuw7gRxkvi3FwWqcQ7HbBjAqOzdQF_owRDWa-UDIm_HdfQW8vdCTRfJV2k" tabs="timeline" />
      </FacebookProvider>    
    );
  }
}


export default FacebookFeed;