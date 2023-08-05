import { ReactNode } from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export type Varient = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type Bold =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'normal'
  | 'bold'
  | undefined;

export interface IHeading {
  /**
   * Container Style outer view of the Text element
   */
  containerStyle?: ViewStyle;
  style?: TextStyle;
  variant?: Varient;
  align?: 'center' | 'right' | 'left' | 'justify';
  bold?: Bold;
  color?: string;
  children: ReactNode;
  numberOfLines?: number;
}
