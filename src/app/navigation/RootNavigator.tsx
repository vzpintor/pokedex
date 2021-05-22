import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import PrimaryNavigation from '@navigation/PrimaryNavigation';

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => (
  <NavigationContainer {...props} ref={ref}>
    <PrimaryNavigation />
  </NavigationContainer>
));

RootNavigator.displayName = 'RootNavigator';
