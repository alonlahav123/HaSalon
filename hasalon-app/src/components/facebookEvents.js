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
