import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon,
         GooglePlusShareButton, GooglePlusIcon, LinkedinShareButton, LinkedinIcon,
         WhatsappShareButton, WhatsappIcon, PinterestShareButton, PinterestIcon,
         EmailShareButton, EmailIcon } from 'react-share';
import { List } from 'semantic-ui-react';

  const ShareButtons = () => (
   // add this in the parantheses line 8 {id}
  <div>

  <List horizontal>

  <List.Item>
  <FacebookShareButton
  // TODO !!!
  // change all url for the buttons to reflect the choice of product 
  // url=`dplstore.com/products/${id}`
   url="http://www.devpointlabs.com/"
   quote="Check out the products from this site!"
   className="facebookButton">
   <FacebookIcon
    size={40}
    round
   />
  </FacebookShareButton>
  </List.Item>
  
  <List.Item>
  <TwitterShareButton
  url="http://www.devpointlabs.com/"
  quote="Check out the products from this site!"
  className="twitterButton">
  <TwitterIcon
    size={40}
    round
  />
  </TwitterShareButton>
  </List.Item>
  <List.Item>
  <GooglePlusShareButton
  url="http://www.devpointlabs.com/"
  quote="Check out the products from this site!"
  className="googleButton">
  <GooglePlusIcon
    size={40}
    round
  />
  </GooglePlusShareButton>
  </List.Item>

  <List.Item>
  <LinkedinShareButton
  url="http://www.devpointlabs.com/"
  quote="Check out the products from this site!"
  className="linkedinButton">
  <LinkedinIcon
    size={40}
    round
  />
  </LinkedinShareButton>
  </List.Item>

  <List.Item>
  <WhatsappShareButton
  url="http://www.devpointlabs.com/"
  quote="Check out the products from this site!"
  className="whatsappButton">
  <WhatsappIcon
    size={40}
    round
  />
  </WhatsappShareButton>
  </List.Item>
 <List.Item>
 <EmailShareButton
 url="http://www.devpointlabs.com/"
 quote="Check out the products from this site!"
 body={"Hey, check out this cool product I got!" + <a href="www.devpointlabs.com">Link</a>}
 className="emailButton">
    <EmailIcon
      size={40}
      round/>
 </EmailShareButton>
 </List.Item>

</List>
</div>
)

export default ShareButtons; 
