import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";
import { fontSizes, fontWeights } from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: metrics.spacingSm,
      backgroundColor: colors.card,
    },
    backButton: {
      minWidth: metrics.padding * 2.5,
      marginRight: metrics.spacingSm,
    },
    title: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.bold as any,
      marginLeft: metrics.spacingSm,
      color: colors.text,
    },
    webview: {
      flex: 1,
    },
  });