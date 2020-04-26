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

library.add(faFacebookF, faLinkedinIn, faTwitter, faWhatsapp);

const Share = ({ socialConfig }) => (
  <div className="share">
    <ul className="list-inline list-reset">
      <li>Share this post</li>
      <li>
        <TwitterShareButton resetButtonStyle={false} url={socialConfig.config.url} className="btn btn-share-twitter" title={socialConfig.config.title} via={socialConfig.twitterHandle}>
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'twitter']}/>
          </span>
          <span className="text">Tweet</span>
        </TwitterShareButton>
      </li>
      <li>
        <FacebookShareButton resetButtonStyle={false} url={socialConfig.config.url} className="btn btn-share-facebook">
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
          </span>
          <span className="text">Share</span>
        </FacebookShareButton>
      </li>
      <li>
        <LinkedinShareButton resetButtonStyle={false} url={socialConfig.config.url} className="btn btn-share-linkedin" title={socialConfig.config.title}>
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
          </span>
          <span className="text">Share</span>
        </LinkedinShareButton>
      </li>
      <li>
        <WhatsappShareButton resetButtonStyle={false} url={socialConfig.config.url} className="btn btn-share-whatsapp" title={socialConfig.config.title}>
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'whatsapp']}/>
          </span>
          <span className="text">Share</span>
        </WhatsappShareButton>
      </li>
    </ul>
  </div>
);

export default Share;
