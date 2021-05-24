import './app/i18n';
import React, { createRef, FunctionComponent as Component } from 'react';
import { Provider, useSelector } from 'react-redux';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { NavigationContainerRef } from '@react-navigation/native';
import * as storage from '@utils/storage/storage';
import { useNavigationPersistence } from '@navigation/NavigationUtilities';
import { RootNavigator } from '@navigation/RootNavigator';
import { persistor, rootStore } from '@stores/rootStore';
import { PersistGate } from 'redux-persist/integration/react';
import { IState } from '@reduxInterfaces/rootStateInterface';
import { View } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';

enableScreens();

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

export const navigationRef: any = createRef<NavigationContainerRef>();

function Loading() {
  const { loading } = useSelector((state: IState) => state.general);

  return (
    <>
      {loading && (
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 1,
          }}>
          <SkypeIndicator color="white" animating={loading} size={40} />
        </View>
      )}
    </>
  );
}

const App: Component<{}> = () => {
  const { initialNavigationState, onNavigationStateChange } =
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
          <Loading />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
