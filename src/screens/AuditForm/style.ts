import { StyleSheet } from "react-native";
import metrics from "../../styles/metrics";
import colors from "../../styles/colors";
import { fontSizes, fontWeights } from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: metrics.padding,
      backgroundColor: colors.background,
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    title: {
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.bold as any,
      marginBottom: metrics.spacingMd,
      alignSelf: 'center',
      color: colors.text,
    },
    stepContainer: {
      flex: 1,
      marginTop: metrics.spacingMd,
    },
    stepTitle: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.medium as any,
      marginBottom: metrics.spacingMd,
      color: colors.text,
    },
    ratingRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: metrics.spacingMd,
    },
    ratingCircle: {
      width: metrics.spacingLg,
      height: metrics.spacingLg,
      borderRadius: metrics.spacingLg / 2,
      borderWidth: 2,
      borderColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: metrics.spacingSm,
    },
    ratingSelected: {
      backgroundColor: colors.primary,
    },
    ratingText: {
      fontSize: fontSizes.lg,
      color: colors.primary,
      fontWeight: fontWeights.bold as any,
    },
    selectedRatingText: {
      color: colors.background,
    },
    checkboxButton: {
      marginVertical: metrics.spacingSm,
    },
    imageRow: {
      flexDirection: 'row',
      marginBottom: metrics.spacingMd,
      justifyContent: 'center',
    },
    imageButton: {
      marginHorizontal: metrics.spacingSm,
      minWidth: metrics.padding * 4,
    },
    preview: {
      width: metrics.spacingLg * 5,
      height: metrics.spacingLg * 5,
      borderRadius: metrics.cardRadius,
      alignSelf: 'center',
      marginTop: metrics.spacingSm,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: metrics.spacingMd,
      marginTop: metrics.spacingSm,
    },
    actionButton: {
      minWidth: metrics.padding * 4,
      marginHorizontal: metrics.spacingSm,
    },
    input: {
      minHeight: metrics.inputHeight,
      fontSize: fontSizes.md,
      marginBottom: metrics.spacingMd,
    },
  });