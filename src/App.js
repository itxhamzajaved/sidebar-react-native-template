import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useTheme} from 'react-native-paper';
import MyStatusBar from './Components/CustomStatusBar';
import ChangeThemeProvider from './Contexts/ChangeThemeProvider';
import InternetConnectionProvider from './Contexts/InternetConnectionProvider';
import Providers from './Contexts/Providers';
import RootStack from './Navigation/RootStack';
import CommonStyles from './Styles/CommonStyles';

export const navigationRef = createNavigationContainerRef();

export default function App() {
  return (
    <ChangeThemeProvider>
      <Providers>
        <MainView />
      </Providers>
    </ChangeThemeProvider>
  );
}

const MainView = () => {
  let theme = useTheme();

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <GestureHandlerRootView style={[CommonStyles.flexOne]}>
        <MyStatusBar
          backgroundColor={theme?.colors?.background}
          barStyle={theme?.barStyle}
        />
        <InternetConnectionProvider>
          <MyStatusBar
            backgroundColor={theme?.colors?.background}
            barStyle={theme?.barStyle}
          />
          <RootStack />
        </InternetConnectionProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};
