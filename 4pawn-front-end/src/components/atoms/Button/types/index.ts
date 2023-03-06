export default interface PropsButton {
  content:string;
  onClick?: () => void;
  className: string;
  type: 'submit' | 'button';
}