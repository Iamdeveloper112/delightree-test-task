/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { RoleProvider, AuditProvider } from './src/context/RoleProvider';
import RootNavigation from './src/navigation/RootNavigation';

function App(): React.JSX.Element {
  return (
    <RoleProvider>
      <AuditProvider>
        <RootNavigation />
      </AuditProvider>
    </RoleProvider>
  );
}

export default App;
