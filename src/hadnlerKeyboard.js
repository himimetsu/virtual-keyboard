class Handler {
  constructor() {
    this.up = [];
    this.down = [];
    this.rus = [];
    this.eng = [];
    this.enterText = undefined;
    this.currentLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'EN';
    this.start = 0;
    this.end = 0;
    this.isShiftPressed = false;
  };

  updateCursorPosition() {
    this.enterText.selectionStart = this.start;
    this.enterText.selectionEnd = this.end;
  };

  changeCase() {
    for (let i = 0; i < this.up.length; i++) {
      this.up[i].classList.toggle('hidden');
      this.down[i].classList.toggle('hidden');
    }
  };

  changeActiveLang() {
    this.currentLang = this.currentLang === 'EN' ? 'RU' : 'EN';
    localStorage.setItem('lang', this.currentLang);
    for (let i = 0; i < this.rus.length; i++) {
      this.rus[i].classList.toggle('hidden');
      this.eng[i].classList.toggle('hidden');
      this.rus[i].classList.toggle('show');
      this.eng[i].classList.toggle('show');
    }
  };

  updateDomElements() {
    this.up = document.getElementsByClassName('up');
    this.down = document.getElementsByClassName('down');
    this.rus = document.getElementsByClassName('rus');
    this.eng = document.getElementsByClassName('eng');
    this.enterText = document.getElementsByClassName('textarea')[0];
  };

  onClick(e) {
    const type = e.target.dataset.type;
    const currentSymbol = e.target.innerText;
    const translation = '\n';

    if (type === 'key' || type === 'spec-key') {
      const element = e.target.parentNode.parentNode;
      element.classList.add('active');
      setTimeout(() => { element.classList.remove('active') }, 200);
    }

    switch (type) {
      case 'key':
        const start = this.enterText.value.substring(0, this.start);
        const end = this.enterText.value.substring(this.start);
        this.enterText.value = start + currentSymbol + end;
        this.start += 1;
        this.end += 1;
        break;

      case 'spec-key':
        switch (currentSymbol) {
          case '_':
            const spaceStart = this.enterText.value.substring(0, this.start);
            const spaceEnd = this.enterText.value.substring(this.start);
            this.enterText.value = spaceStart + ' ' + spaceEnd;
            this.start += 1;
            this.end += 1;
            break;

          case 'Backspace':
            const start = this.enterText.value.substring(0, this.start - 1);
            const end = this.enterText.value.substring(this.start);
            if (this.start > 0) {
              this.enterText.value = start + end;
              this.start -= 1;
              this.end -= 1;
            }
            break;

          case 'Tab':
            const tabStart = this.enterText.value.substring(0, this.start);
            const tabEnd = this.enterText.value.substring(this.end);
            this.enterText.value = tabStart + '    ' + tabEnd;
            this.enterText.focus()
            this.start += 4;
            this.end += 4;
            break;

          case 'CapsLock':
            this.changeCase();
            break;

          case 'Enter':
            const enterStart = this.enterText.value.substring(0, this.start);
            const enterEnd = this.enterText.value.substring(this.end);
            this.enterText.value = enterStart + translation + enterEnd;
            break;

          case 'Del':
            const delStart = this.enterText.value.substring(0, this.start);
            const delEnd = this.enterText.value.substring(this.end + 1);
            this.enterText.value = delStart + delEnd;
            break;

          case 'RU':
            this.changeActiveLang();
            break;

          case 'EN':
            this.changeActiveLang();
            break;
        }
        break;

      case 'textarea':
        this.start = e.target.selectionStart;
        this.end = e.target.selectionEnd;
        break;
    }

    this.updateCursorPosition();
  };

  onKeyDown(e) {
    document.getElementsByClassName(e.code)[0].classList.add('active');

    switch (e.key) {
      case 'Shift':
        {
          if (!this.isShiftPressed) {
            this.changeCase();
          }

          this.isShiftPressed = true;

          e.altKey === true && this.changeActiveLang();
        }
        break;

      case 'Alt':
        e.shiftKey === true && this.changeActiveLang();
        break;
    }
  };

  onKeyUp(e) {
    document.getElementsByClassName(e.code)[0].classList.remove('active');

    switch (e.key) {
      case 'Shift':
        this.isShiftPressed = false;
        this.changeCase();
        break;

      case 'CapsLock':
        this.changeCase();
        break;
    }
  };
};

const HandlerKeyboard = new Handler;

export default HandlerKeyboard;
