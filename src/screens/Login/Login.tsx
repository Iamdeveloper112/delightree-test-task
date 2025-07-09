import React from 'react';
import { View, Text } from 'react-native';
import { useRoleContext } from '../../context/RoleProvider';
import { Button } from '../../components';
import { LOGIN_TITLE, ROLES } from '../../constants/strings';
import { styles } from './style';

const Login = ({ navigation }: any) => {
  const { setRole } = useRoleContext();

  const handleSelectRole = (role: string) => {
    setRole(role as any);
    navigation.replace('AuditHistory');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LOGIN_TITLE}</Text>
      {ROLES.map((role) => (
        <Button
          key={role}
          title={role}
          variant="primary"
          onPress={() => handleSelectRole(role)}
          style={styles.button}
        />
      ))}
    </View>
  );
};

export default Login; 