import { ReactNode } from 'react';

export default interface IPropsLabel {
  content: string;
  htmlFor: string;
  children: ReactNode;
  className: string;
}