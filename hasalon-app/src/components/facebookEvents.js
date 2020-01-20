// import React from 'react';

// function FacebookEvent(props) {
//     return(
//         <div className="fb-page"
//             data-tabs='events'
//             data-href='https://www.facebook.com/hasaloncop/'
//             data-width='380'
//             data-hide-cover='false'>
//         </div>);
// }

import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
export  class FacebookEvent extends Component {
  render() {
    return (
      <FacebookProvider appId="2184589704978013">
        <Page href="https://www.facebook.com/pg/hasaloncop/events/?ref=page_internal" tabs="events" />
      </FacebookProvider>    
    );
  }
}

export default FacebookEvent;