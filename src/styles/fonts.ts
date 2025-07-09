import { moderateScale } from '../utils/deviceConfig';

const fontSizes = {
  xs: moderateScale(12),
  sm: moderateScale(14),
  md: moderateScale(16),
  lg: moderateScale(20),
  xl: moderateScale(28),
};

const fontWeights = {
  regular: '400',
  medium: '500',
  bold: '700',
};

const fontFamilies = {
  default: 'System',
};

export { fontSizes, fontWeights, fontFamilies }; 