export default interface PropsButton {
  content:string;
  disabled?:boolean;
  onClick?: () => void;
  className: string;
  type: 'submit' | 'button';
}