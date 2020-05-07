import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

function isMobileOrTablet() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}

library.add(faFacebookF, faLinkedinIn, faTwitter, faWhatsapp);

const Share = ({ socialConfig }) => (
  <div className="share reset-inline">
    <span className="text">Share</span>
    <a className="twitter" href={`https://twitter.com/intent/tweet?text=${socialConfig.config.title}&url=${socialConfig.config.url}&via=${socialConfig.twitterHandle}`}
       target="blank"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
    <a className="facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${socialConfig.config.url}`}
       target="blank"><FontAwesomeIcon icon={['fab', 'facebook-f']}/></a>
    <a className="linkedin" href={`https://www.linkedin.com/shareArticle?mini=true&url=${socialConfig.config.url}&title=${socialConfig.config.title}`}
       target="blank"><FontAwesomeIcon icon={['fab', 'linkedin-in']}/></a>
    <a className="whatsapp" href={`https://${(isMobileOrTablet() ? 'api' : 'web')}.whatsapp.com/send?text=${socialConfig.config.title} ${socialConfig.config.url}`}
       target="blank"><FontAwesomeIcon icon={['fab', 'whatsapp']}/></a>
  </div>
);

export default Share;
