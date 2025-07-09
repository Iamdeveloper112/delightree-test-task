import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";
import { fontSizes, fontWeights } from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      padding: metrics.padding,
    },
    title: {
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.bold as any,
      marginBottom: metrics.spacingMd,
      color: colors.text,
    },
    card: {
      width: '100%',
      maxWidth: metrics.cardMaxWidth,
      marginBottom: metrics.spacingMd,
      alignSelf: 'center',
    },
    label: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.medium as any,
      marginTop: metrics.spacingSm,
      color: colors.text,
    },
    value: {
      fontSize: fontSizes.md,
      marginBottom: metrics.spacingSm,
      color: colors.text,
    },
    image: {
      width: metrics.spacingLg * 5,
      height: metrics.spacingLg * 5,
      borderRadius: metrics.cardRadius,
      marginVertical: metrics.spacingMd,
      alignSelf: 'center',
    },
    actionButton: {
      minWidth: metrics.padding * 4,
      marginVertical: metrics.spacingSm,
      alignSelf: 'center',
    },
    logoutButton: {
      position: 'absolute',
      right: metrics.padding,
      bottom: metrics.padding,
      minWidth: metrics.padding * 4,
      alignSelf: 'flex-end',
      zIndex: 10,
    },
  });