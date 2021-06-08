import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import { ContextProvider } from "./src/context/providerCompose";

export default function App() {
  return (
    //<ContextProvider>
      <AppContainer />
    //</ContextProvider>
  );
}
