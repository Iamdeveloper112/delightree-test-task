import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuditFormScreen, AuditSummaryScreen, AuditHistoryScreen, PolicyViewerScreen, Login } from '../screens';

const Stack = createNativeStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerBackButtonDisplayMode: 'minimal' }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AuditForm" component={AuditFormScreen} />
      <Stack.Screen name="AuditSummary" component={AuditSummaryScreen} />
      <Stack.Screen name="AuditHistory" component={AuditHistoryScreen} />
      <Stack.Screen name="PolicyViewer" component={PolicyViewerScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigation; 