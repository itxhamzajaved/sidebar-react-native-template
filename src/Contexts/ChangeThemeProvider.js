import React from 'react';
import {DarkTheme, LightTheme} from '../Themes';
import LocalStorage from '../Utility/LocalStorage';

const ChangeThemeContext = React.createContext();
export const useAppTheme = () => {
  const context = React.useContext(ChangeThemeContext);
  if (context === undefined) {
    throw new Error('useAppTheme must be used within a ChangeThemeContext');
  }
  return context;
};

const ChangeThemeProvider = props => {
  let [isDarkMode, setDarkMode] = React.useState(false);
  let [theme, setTheme] = React.useState(LightTheme);
  let [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      let value = await LocalStorage.getString('isDarkMode');
      value = !!(value === 'true');
      setDarkMode(value);
      setTheme(value === true ? DarkTheme : LightTheme);
      setLoading(false);
    })();
  }, []);

  let changeDarkMode = value => {
    setDarkMode(value);
    LocalStorage.storeString('isDarkMode', String(value));
    setTheme(value ? DarkTheme : LightTheme);
  };

  return (
    <ChangeThemeContext.Provider
      value={{
        setDarkMode: changeDarkMode,
        isDarkMode,
        theme,
      }}>
      {!loading && props.children}
    </ChangeThemeContext.Provider>
  );
};

export default ChangeThemeProvider;
