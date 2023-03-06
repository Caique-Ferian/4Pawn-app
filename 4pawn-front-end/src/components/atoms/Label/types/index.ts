import { ReactNode } from 'react';

export default interface PropsLabel {
  content: string;
  htmlFor: string;
  children: ReactNode;
  className: string;
}