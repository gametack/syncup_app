import React, { useState } from 'react';

import HomeSN from './src/navigation/RootNavigator';
import TestNavigator from './src/testing/TestNavigator'

const App = () => {
  const [isReady, setIsReady] = useState(false);

  // return <RootNavigator />;
  return <TestNavigator />;
};
// export default withAuthenticator(App)
export default App