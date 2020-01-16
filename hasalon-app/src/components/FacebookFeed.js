// import React, { Component } from 'react';
// import { FacebookProvider, Group } from 'react-facebook';
 
// export class FacebookFeed extends React.Component {
//   render() {
//     return (
//       <FacebookProvider appId="2184589704978013">
//         <Group
//           href="https://www.facebook.com/groups/1977252332523976/"
//           width="300"
//           showSocialContext={true}
//           showMetaData={true}
//           skin="light"
//         />
//       </FacebookProvider>    
//     );
//   }
// }



// import React, { Component} from 'react';
// import { FacebookProvider, Feed } from 'react-facebook';

// export class FacebookFeed extends Component {
//     render() {
//         return (
//             <FacebookProvider appId="2184589704978013">
//         <Feed link="https://www.facebook.com">
//           {({ handleClick }) => (
//               <button type="button" onClick={handleClick}>Share on Feed</button>
//               )}
//         </Feed>
//       </FacebookProvider>    
//     );
// }
// }






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