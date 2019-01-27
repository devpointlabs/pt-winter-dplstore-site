import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon,
         GooglePlusShareButton, GooglePlusIcon, LinkedinShareButton, LinkedinIcon,
         WhatsappShareButton, WhatsappIcon, PinterestShareButton, PinterestIcon,
         EmailShareButton, EmailIcon } from 'react-share';
import { List } from 'semantic-ui-react';

  const ShareButtons = () => (
   // add this in the parantheses line 8 {id}
  <div>

  <List  style={{filter: 'grayscale(100%)'}} horizontal>

  <List.Item>
  <FacebookShareButton
  // TODO !!!
  // change all url for the buttons to reflect the choice of product 
  // url=`dplstore.com/products/${id}`
   url="wwww.facebook.com"
   quote="Check out this product"
   className="facebookButton">
   <FacebookIcon
    size={40}
    round
   />
  </FacebookShareButton>
  </List.Item>
  
  <List.Item>
  <TwitterShareButton
  url="www.twitter.com"
  quote="twitter"
  className="twitterButton">
  <TwitterIcon
    size={40}
    round
  />
  </TwitterShareButton>
  </List.Item>

  <List.Item>
  <GooglePlusShareButton
  url="www.google.com"
  quote="google"
  className="googleButton">
  <GooglePlusIcon
    size={40}
    round
  />
  </GooglePlusShareButton>
  </List.Item>

  <List.Item>
  <LinkedinShareButton
  url="www.linkedin.com"
  quote="linkedIn"
  className="linkedinButton">
  <LinkedinIcon
    size={40}
    round
  />
  </LinkedinShareButton>
  </List.Item>

  <List.Item>
  <WhatsappShareButton
  url="www.whatsapp.com"
  quote="whatsapp"
  className="whatsappButton">
  <WhatsappIcon
    size={40}
    round
  />
  </WhatsappShareButton>
  </List.Item>

  <List.Item>
  {/* <PinterestShareButton
  url="www.pinterest.com"
  quote="pinterest"
  className="pinterestButton">
  <PinterestIcon
    size={40}
    round
  />
  </PinterestShareButton> */}
  </List.Item>
  
 <List.Item>
 <EmailShareButton
 url="www.devpointlabs.com"
 subject="Check out this product!"
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