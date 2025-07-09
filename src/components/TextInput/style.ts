import { StyleSheet } from "react-native";
import { moderateScale } from "../../utils/deviceConfig";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
    input: {
      borderWidth: moderateScale(1),
      borderColor: colors.border,
      borderRadius: moderateScale(8),
      padding: moderateScale(12),
      minHeight: moderateScale(44),
      fontSize: moderateScale(16),
      marginVertical: moderateScale(6),
      backgroundColor: colors.background,
    },
  });