import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {useAppTheme} from './ChangeThemeProvider';
import KeyboardProvider from './KeyboardProvider';
import LoadingProvider from './LoadingProvider';
import UserProvider from './UserProvider';

const Providers = ({children}) => {
  const {theme} = useAppTheme();

  return (
    <UserProvider>
      <PaperProvider theme={theme}>
        <KeyboardProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </KeyboardProvider>
      </PaperProvider>
    </UserProvider>
  );
};

export default Providers;
