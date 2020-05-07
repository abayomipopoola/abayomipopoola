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
      <li>Share</li>
      <li>
        <TwitterShareButton resetButtonStyle={false} url={socialConfig.config.url} className="btn share-tw" title={socialConfig.config.title} via={socialConfig.twitterHandle}>
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'twitter']}/>
          </span>
        </TwitterShareButton>
      </li>
      <li>
        <FacebookShareButton resetButtonStyle={false} url={socialConfig.config.url} className="btn share-fb">
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
          </span>
        </FacebookShareButton>
      </li>
      <li>
        <LinkedinShareButton resetButtonStyle={false} url={socialConfig.config.url} className="btn share-in" title={socialConfig.config.title}>
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
          </span>
        </LinkedinShareButton>
      </li>
      <li>
        <WhatsappShareButton resetButtonStyle={false} url={socialConfig.config.url} className="btn share-wh" title={socialConfig.config.title}>
          <span className="icon">
            <FontAwesomeIcon icon={['fab', 'whatsapp']}/>
          </span>
        </WhatsappShareButton>
      </li>
    </ul>
    <button id="search-button">
      <svg id="search-icon" className="search-icon" viewBox="0 0 24 24">
        <path
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </button>
  </div>
);

export default Share;
