import { StyleSheet } from "react-native";
import { moderateScale } from "../../utils/deviceConfig";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
    primaryButton: {
      backgroundColor: colors.primary,
      paddingVertical: moderateScale(14),
      paddingHorizontal: moderateScale(28),
      borderRadius: moderateScale(8),
      alignItems: 'center',
      marginVertical: moderateScale(6),
    },
    primaryText: {
      color: colors.background,
      fontSize: moderateScale(18),
      fontWeight: '600',
    },
    disabledButton: {
      backgroundColor: colors.disabled,
    },
    disabledText: {
      color: colors.muted,
    },
    checkboxRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: moderateScale(8),
    },
    checkbox: {
      width: moderateScale(24),
      height: moderateScale(24),
      borderWidth: moderateScale(2),
      borderColor: colors.primary,
      marginRight: moderateScale(12),
      borderRadius: moderateScale(4),
      backgroundColor: colors.background,
    },
    checkboxChecked: {
      backgroundColor: colors.primary,
    },
    disabledCheckbox: {
      backgroundColor: colors.disabledBackground,
      borderColor: colors.disabled,
    },
    checkboxLabel: {
      fontSize: moderateScale(16),
    },
    ratingCircle: {
      width: moderateScale(48),
      height: moderateScale(48),
      borderRadius: moderateScale(24),
      borderWidth: moderateScale(2),
      borderColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: moderateScale(8),
    },
    ratingSelected: {
      backgroundColor: colors.primary,
    },
    ratingText: {
      fontSize: moderateScale(20),
      color: colors.primary,
      fontWeight: 'bold',
    },
    ratingTextSelected: {
      color: colors.background,
    },
    disabledRating: {
      backgroundColor: colors.disabledBackground,
      borderColor: colors.disabled,
    },
  });