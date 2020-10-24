import './Keyboard.scss';
import { state, specKeys } from '../../data';

const renderVirtualKeyboard = () => {
  const keyboard = document.createElement('div')
  const currentLang = localStorage.getItem('lang');
  keyboard.classList.add('keyboard')
  for (let key in state) {
    const row = document.createElement('div')
    row.classList.add('row')
    keyboard.appendChild(row)

    state[key].map((item) => {
      const note = document.createElement('div')
      note.classList.add('key')
      note.classList.add(item.name)
      row.appendChild(note)

      const rus = document.createElement('div')
      rus.classList.add('rus')
      currentLang === 'EN' || currentLang === null ? rus.classList.add('hidden') : null;
      note.appendChild(rus)

      const eng = document.createElement('div')
      eng.classList.add('eng')
      currentLang && currentLang === 'RU' && eng.classList.add('hidden');
      note.appendChild(eng)

      for (let index = 0; index < item.content.length; index += 1) {
        const down = document.createElement('div')
        down.classList.add('down')
        down.dataset.type = specKeys.includes(item.content[index].up) ? 'spec-key' : 'key';
        const downText = document.createTextNode(item.content[index].down)
        down.appendChild(downText)

        const up = document.createElement('div')
        up.classList.add('up')
        up.classList.add('hidden')
        up.dataset.type = specKeys.includes(item.content[index].up) ? 'spec-key' : 'key';
        const upText = document.createTextNode(item.content[index].up)
        up.appendChild(upText)

        const currentString = [
          rus,
          eng,
        ]
        currentString[index].appendChild(down)
        currentString[index].appendChild(up)
      }
    })
  }

  return keyboard;
};

const VirtualKeyboard = () => {
  const container = document.getElementsByClassName('container')[0];
  const virtual = document.createDocumentFragment();
  virtual.appendChild(renderVirtualKeyboard());
  container.appendChild(virtual);

  return virtual;
};

export default VirtualKeyboard;
