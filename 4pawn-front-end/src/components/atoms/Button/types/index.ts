export default interface IPropsButton {
  content:string;
  onClick?: () => void;
  className: string;
  type: 'submit' | 'button';
}