import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { fontSizes, fontWeights } from '../../styles/fonts';
import metrics from '../../styles/metrics';

export const AuditHistoryScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: metrics.padding,
  },
  roleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: metrics.spacingSm,
  },
  userRole: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium as any,
    color: colors.textSecondary,
  },
  userRoleValue: {
    color: colors.primary,
    fontWeight: fontWeights.bold as any,
  },
  policyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  policyText: {
    color: colors.primary,
    marginLeft: metrics.spacingSm,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold as any,
  },
  empty: {
    fontSize: fontSizes.lg,
    color: colors.muted,
    marginTop: metrics.spacingLg,
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: metrics.padding,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    borderRadius: metrics.borderRadius,
    backgroundColor: colors.background,
    marginBottom: metrics.spacingSm,
  },
  itemText: {
    fontSize: fontSizes.md,
    color: colors.text,
  },
  deleteButton: {
    backgroundColor: colors.red,
    marginLeft: metrics.spacingSm,
  },
  footerRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: metrics.spacingMd,
    marginBottom: metrics.spacingMd,
    paddingRight: metrics.spacingSm,
    paddingLeft: metrics.spacingSm,

  },
  footerButton: {
    minWidth: metrics.padding * 7,
    marginHorizontal: metrics.spacingSm,
  },
  addButton: {
    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
  },
  logoutButton: {
    backgroundColor: colors.danger,
    alignSelf: 'flex-end',

  },
}); 