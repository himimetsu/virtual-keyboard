import './Information.scss';

const Information = () => {
  const container = document.getElementsByClassName('container')[0];

  const info = document.createElement('div')
  info.classList.add('information')
  const description = document.createElement('p')
  const textDescription = document.createTextNode('Для переключения языка используйте следующие комбинации:')
  description.appendChild(textDescription)
  info.appendChild(description)
  const combinations = document.createElement('div')
  combinations.classList.add('information__combinations')
  const windows = document.createElement('div')
  windows.classList.add('windows')
  combinations.appendChild(windows)
  const textWindows = document.createTextNode('Левые Shift и Alt')
  combinations.appendChild(textWindows)
  const apple = document.createElement('div')
  apple.classList.add('apple')
  apple.setAttribute('src', '../../assets/images/apple.png')
  combinations.appendChild(apple)
  const textApple = document.createTextNode('Левые Shift и Option')
  combinations.appendChild(textApple)
  info.appendChild(combinations)

  container.appendChild(info)
};

export default Information;
