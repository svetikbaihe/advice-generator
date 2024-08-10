import './style.scss'
import $app from '@constants/app';
import Container from '@elements/Container';

const $container = new Container().containerElement;

if($container) {
  $app?.appendChild($container);
}




