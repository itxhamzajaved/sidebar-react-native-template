import NetInfo from '@react-native-community/netinfo';
import React from 'react';
import {Alert} from 'react-native';
import {NoInternetConnection} from '../Components';

const InternetConnectionContext = React.createContext();
export const useInterConnection = () => {
  const context = React.useContext(InternetConnectionContext);
  if (context === undefined) {
    throw new Error(
      'useInternetConnection must be used within a InternetConnectionContext',
    );
  }
  return context;
};

const InternetConnectionProvider = props => {
  const [isConnected, setIsConnected] = React.useState(true);

  React.useEffect(() => {
    NetInfo.addEventListener(state => {
      setIsConnected(state?.isConnected);
    });
  }, []);

  const connectAgain = () => {
    NetInfo.fetch().then(state => {
      state.isConnected
        ? setIsConnected(true)
        : Alert.alert('Please check your internet.');
    });
  };

  return (
    <InternetConnectionContext.Provider value={{isConnected}}>
      {isConnected ? (
        props.children
      ) : (
        <NoInternetConnection connectAgain={connectAgain} />
      )}
    </InternetConnectionContext.Provider>
  );
};

export default InternetConnectionProvider;
