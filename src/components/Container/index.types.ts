import { ViewProps } from 'react-native';

export interface ContainerProp extends ViewProps {
  enableBG?: boolean;
  blurRadius?: number;
  safeArea?: boolean;
}
