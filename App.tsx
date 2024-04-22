import React from 'react';
import {Provider} from 'react-redux';

import {setupStore} from './src/store/RootReducer';
import {NavigationContainer} from './src/navigation/NavigationContainer';

function App(): React.JSX.Element {
  const store = setupStore();

  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}

export default App;
