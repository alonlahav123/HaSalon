import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import WidthFinder from './widthFinder'
import './facebook.css'
 
export  class FacebookFeed extends Component {
  render(WidthFinder) {
    console.log(WidthFinder)
    return (
<<<<<<< HEAD
      <div className='faceBook'>
        <FacebookProvider appId="2184589704978013">
          <Page 
          href="https://www.facebook.com/hasaloncop/?eid=ARCBchcJq9DokkpN3bobIhSuw7gRxkvi3FwWqcQ7HbBjAqOzdQF_owRDWa-UDIm_HdfQW8vdCTRfJV2k"
          tabs="timeline"
          // Figure out how to make the width here responsive
          />
      {/* https://www.facebook.com/pg/hasaloncop/events/?ref=page_internal */}
        </FacebookProvider>    
      </div>
=======
      <FacebookProvider appId="2184589704978013">
        <Page href="https://www.facebook.com/hasaloncop/?eid=ARCBchcJq9DokkpN3bobIhSuw7gRxkvi3FwWqcQ7HbBjAqOzdQF_owRDWa-UDIm_HdfQW8vdCTRfJV2k" tabs="timeline" />
      </FacebookProvider>    
>>>>>>> 7a8e9ceff77690b4d93afce4828d55f0b56a7129
    );
  }
}


export default FacebookFeed;
