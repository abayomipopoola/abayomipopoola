import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share'

export const ShareButtons = ({ twitterHandle, siteUrl, title }) => (
    <p>
        <FacebookShareButton className="share-button" url={siteUrl}>
            <FacebookIcon size={25} round={true} />
        </FacebookShareButton>
        <TwitterShareButton className="share-button" url={siteUrl} title={title} via={twitterHandle}>
          <TwitterIcon size={25} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton className="share-button" url={siteUrl} title={title}>
          <LinkedinIcon size={25} round={true} />
        </LinkedinShareButton>
        <WhatsappShareButton className="share-button" url={siteUrl} title={title}>
            <WhatsappIcon size={25} round={true} />
        </WhatsappShareButton>
    </p>
)

export default ShareButtons
