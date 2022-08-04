import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="charter"
      rel="preload"
      href="/fonts/Charter.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />
  ]);
};