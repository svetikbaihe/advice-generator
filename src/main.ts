import './style.scss'
import $app from '@constants/app';
import Button from '@elements/Button';

const button = new Button({}).buttonElement;

if(button) {
  $app?.appendChild(button);
}


