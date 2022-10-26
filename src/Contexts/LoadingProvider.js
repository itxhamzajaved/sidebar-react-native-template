import React from 'react';
import {LoadingView} from '../Components';

export const LoadingContext = React.createContext();
export const useLoading = () => {
  const context = React.useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingContext');
  }
  return context;
};

const LoadingProvider = props => {
  const [loading, setLoading] = React.useState(false);

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{
        startLoading,
        stopLoading,
      }}>
      <LoadingView visible={loading} />
      {props.children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
