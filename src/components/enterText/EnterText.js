import './EnterText.scss';

const EnterText = () => {
  const container = document.getElementsByClassName('container')[0];

  const textContent = document.createElement('div')
  textContent.classList.add('enter-text')

  const text = document.createElement('textarea')
  text.classList.add('textarea')
  text.dataset.type = 'textarea';
  textContent.appendChild(text)

  container.appendChild(textContent)
};

export default EnterText;
