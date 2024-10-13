import $app from '@constants/app';
import Container from '@elements/Container';
import AdviceCard from '@modules/AdviceCard';
import './style.scss'

const $adviceCard = new AdviceCard().adviceCardElement;

const $container = new Container({ element: $adviceCard }).containerElement;

if($container) {
  $app?.appendChild($container);
}




