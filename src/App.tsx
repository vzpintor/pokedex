import React, {createRef, FunctionComponent as Component} from 'react';
import {Provider} from 'react-redux';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {NavigationContainerRef} from '@react-navigation/native';
import * as storage from '@utils/storage/storage';
import {useNavigationPersistence} from '@navigation/NavigationUtilities';
import {RootNavigator} from '@navigation/RootNavigator';
import {persistor, rootStore} from '@stores/rootStore';
import {PersistGate} from 'redux-persist/integration/react';

enableScreens();

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

export const navigationRef: any = createRef<NavigationContainerRef>();

const App: Component<{}> = () => {
  const {initialNavigationState, onNavigationStateChange} =
    useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  return (
    <Provider store={rootStore}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <RootNavigator
            ref={navigationRef}
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
