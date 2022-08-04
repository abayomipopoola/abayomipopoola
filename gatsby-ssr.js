import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="charter"
      rel="preload"
      href="/fonts/charter-400-normal.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />
  ]);
};