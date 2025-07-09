import { StyleSheet } from "react-native";
import { moderateScale } from "../../utils/deviceConfig";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.background,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
      marginVertical: moderateScale(8),
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: moderateScale(2) },
      shadowOpacity: 0.08,
      shadowRadius: moderateScale(8),
      elevation: 2,
    },
  });