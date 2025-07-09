import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useAuditContext } from '../../context/RoleProvider';
import { Button, Card } from '../../components';
import {
  AUDIT_SUMMARY_TITLE,
  AUDIT_SUMMARY_ROLE,
  AUDIT_SUMMARY_TIMESTAMP,
  AUDIT_SUMMARY_RATING,
  AUDIT_SUMMARY_CHECKLIST,
  AUDIT_SUMMARY_COMMENTS,
  AUDIT_SUMMARY_BACK,
  AUDIT_SUMMARY_NOT_FOUND
} from '../../constants/strings';
import { styles } from './style';

const AuditSummaryScreen = ({ route, navigation }: any) => {
  const { id } = route.params;
  const { audits } = useAuditContext();
  const audit = audits.find((a) => a.id === id);

  if (!audit) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{AUDIT_SUMMARY_NOT_FOUND}</Text>
      </View>
    );
  }

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{AUDIT_SUMMARY_TITLE}</Text>
        <Card style={styles.card}>
          <Text style={styles.label}>{AUDIT_SUMMARY_ROLE}: <Text style={styles.value}>{audit.role}</Text></Text>
          <Text style={styles.label}>{AUDIT_SUMMARY_TIMESTAMP}: <Text style={styles.value}>{new Date(audit.timestamp).toLocaleString()}</Text></Text>
          <Text style={styles.label}>{AUDIT_SUMMARY_RATING}: <Text style={styles.value}>{audit.rating}</Text></Text>
          <Text style={styles.label}>{AUDIT_SUMMARY_CHECKLIST}:</Text>
          {audit.checkboxes.map((checked, idx) => (
            <Text key={idx} style={styles.value}>
              {checked ? '✅' : '❌'} {AUDIT_SUMMARY_CHECKLIST} {idx + 1}
            </Text>
          ))}
          <Text style={styles.label}>{AUDIT_SUMMARY_COMMENTS}:</Text>
          <Text style={styles.value}>{audit.comments}</Text>
          {audit.image?.uri && (
            <Image source={{ uri: audit.image.uri }} style={styles.image} />
          )}
        </Card>
        <Button title={AUDIT_SUMMARY_BACK} variant="primary" onPress={() => navigation.replace('AuditHistory')} style={styles.actionButton} />
      </ScrollView>
    </View>
  );
};

export default AuditSummaryScreen; 