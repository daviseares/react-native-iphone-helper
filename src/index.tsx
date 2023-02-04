import { Dimensions, Platform, StatusBar } from 'react-native';

export const isIOS = () => Platform.OS === 'ios'
&& !Platform.isPad
&& !Platform.isTV;

export const isIphoneX = () => {
  const { width, height } = Dimensions.get('window');

  return isIOS() && ((height === 780 || width === 780)
          || (height === 812 || width === 812)
          || (height === 844 || width === 844)
          || (height === 852 || width === 852)
          || (height === 896 || width === 896)
          || (height === 926 || width === 926)
          || (height === 932 || width === 932));
};

export const ifIphoneX = <T, U>(iphoneXStyle: T, regularStyle: U): T | U => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};

export const getStatusBarHeight = (safe?: boolean) => Platform.select({
  ios: ifIphoneX(safe ? 47 : 30, 20),
  android: StatusBar.currentHeight,
  default: 0,
});

export const getBottomSpace = () => (isIphoneX() ? 34 : 0);
