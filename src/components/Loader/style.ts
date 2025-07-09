import { StyleSheet } from "react-native";
import { moderateScale } from "../../utils/deviceConfig";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    text: {
      marginTop: moderateScale(16),
      fontSize: moderateScale(16),
      color: colors.text,
    },
  });