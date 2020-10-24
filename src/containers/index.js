import './index.scss';

const Container = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
};

export default Container;
