import Information from './components/information/Information';
import EnterText from './components/enterText/EnterText';
import VirtualKeyboard from './components/keyboard/Keyboard';
import HandlerKeyboard from './hadnlerKeyboard';
import Container from './containers/index';
import './index.scss';

window.onload = function () {
  Container();
  EnterText();
  Information();
  VirtualKeyboard();
  HandlerKeyboard.updateDomElements();
  document.addEventListener('click', (e) => HandlerKeyboard.onClick(e));
  document.addEventListener('keyup', (e) => HandlerKeyboard.onKeyUp(e));
  document.addEventListener('keydown', (e) => HandlerKeyboard.onKeyDown(e));
};
