import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, ListRenderItemInfo } from 'react-native';
import { useAuditContext, useRoleContext } from '../../context/RoleProvider';
import { Button } from '../../components';
import {
  AUDIT_HISTORY_LOGGED_IN_AS,
  AUDIT_HISTORY_POLICY,
  AUDIT_HISTORY_NO_AUDITS,
  AUDIT_HISTORY_TIMESTAMP,
  AUDIT_HISTORY_ROLE,
  AUDIT_HISTORY_RATING,
  AUDIT_HISTORY_DELETE,
  AUDIT_HISTORY_ADD_AUDIT,
  AUDIT_HISTORY_LOGOUT,
  DELETE_AUDIT_TITLE,
  DELETE_AUDIT_CONFIRM,
  DELETE_AUDIT_CANCEL
} from '../../constants/strings';
import { AuditHistoryScreenStyles } from './styles';

function renderAuditItem(
  { item }: ListRenderItemInfo<any>,
  navigation: any,
  role: string,
  handleDelete: (id: string) => void,
  styles: { [key: string]: any }
) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('AuditSummary', { id: item.id })}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.itemText}>{AUDIT_HISTORY_TIMESTAMP}: {new Date(item.timestamp).toLocaleString()}</Text>
        <Text style={styles.itemText}>{AUDIT_HISTORY_ROLE}: {item.role}</Text>
        <Text style={styles.itemText}>{AUDIT_HISTORY_RATING}: {item.rating}</Text>
      </View>
      {role === 'Admin' && (
        <Button title={AUDIT_HISTORY_DELETE} variant="primary" onPress={() => handleDelete(item.id)} style={styles.deleteButton} />
      )}
    </TouchableOpacity>
  );
}

const AuditHistoryScreen = ({ navigation }: any) => {
  const { audits, deleteAudit } = useAuditContext();
  const { role } = useRoleContext();

  const handleDelete = (id: string) => {
    Alert.alert(DELETE_AUDIT_TITLE, DELETE_AUDIT_CONFIRM, [
      { text: DELETE_AUDIT_CANCEL, style: 'cancel' },
      { text: AUDIT_HISTORY_DELETE, style: 'destructive', onPress: () => deleteAudit(id) },
    ]);
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={AuditHistoryScreenStyles.container}>
      <View style={AuditHistoryScreenStyles.roleRow}>
        <Text style={AuditHistoryScreenStyles.userRole}>{AUDIT_HISTORY_LOGGED_IN_AS}: <Text style={AuditHistoryScreenStyles.userRoleValue}>{role}</Text></Text>
        <TouchableOpacity onPress={() => navigation.navigate('PolicyViewer')} style={AuditHistoryScreenStyles.policyButton} activeOpacity={0.8}>
          <Text style={AuditHistoryScreenStyles.policyText}>{AUDIT_HISTORY_POLICY}</Text>
        </TouchableOpacity>
      </View>
      {audits.length === 0 ? (
        <>
          <Text style={AuditHistoryScreenStyles.empty}>{AUDIT_HISTORY_NO_AUDITS}</Text>
        </>
      ) : (
        <FlatList
          data={audits}
          keyExtractor={(item) => item.id}
          renderItem={(props) => renderAuditItem({ ...props }, navigation, role || '', handleDelete, AuditHistoryScreenStyles)}
        />
      )}
      <View style={AuditHistoryScreenStyles.footerRow}>
        {role === 'Auditor' && (
          <Button
            title={AUDIT_HISTORY_ADD_AUDIT}
            variant="primary"
            onPress={() => navigation.navigate('AuditForm')}
            style={[AuditHistoryScreenStyles.footerButton, AuditHistoryScreenStyles.addButton]}
          />
        )}
        <View style={{ flex: 1 }} />
        <Button
          title={AUDIT_HISTORY_LOGOUT}
          variant="primary"
          onPress={handleLogout}
          style={[AuditHistoryScreenStyles.footerButton, AuditHistoryScreenStyles.logoutButton]}
        />
      </View>
    </View>
  );
};

export default AuditHistoryScreen; 