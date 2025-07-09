import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";
import { fontSizes, fontWeights } from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      padding: metrics.padding,
    },
    title: {
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.bold as any,
      marginBottom: metrics.spacingLg,
      color: colors.text,
    },
    button: {
      width: metrics.cardMaxWidth / 2,
      alignItems: 'center',
      marginVertical: metrics.spacingSm,
    },
  });