import React, { useState } from 'react';

import HomeSN from './src/navigation/HomeSN';


export default () => {
  const [isReady, setIsReady] = useState(false);


  return <HomeSN />;
};