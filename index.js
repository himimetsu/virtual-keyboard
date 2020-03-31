window.onload = function () {
  renderContainer()
  typeText()
  changeLang()
  changeCase()
  activePressKey()
}

const state = {
  row1: [
    {
      name: 'Backquote',
      code: 'Backquote',
      content: [
        {
          lang: 'rus',
          down: 'ё',
          up: 'Ё',
        },
        {
          lang: 'eng',
          down: '`',
          up: '~',
        }
      ],
    },
    {
      name: 'Digit1',
      code: 'Digit1',
      content: [
        {
          lang: 'rus',
          down: '1',
          up: '!',
        },
        {
          lang: 'eng',
          down: '1',
          up: '!',
        }
      ],
    },
    {
      name: 'Digit2',
      code: 'Digit2',
      content: [
        {
          lang: 'rus',
          down: '2',
          up: '"',
        },
        {
          lang: 'eng',
          down: '2',
          up: '@',
        }
      ],
    },
    {
      name: 'Digit3',
      code: 'Digit3',
      content: [
        {
          lang: 'rus',
          down: '3',
          up: '№',
        },
        {
          lang: 'eng',
          down: '3',
          up: '#',
        }
      ],
    },
    {
      name: 'Digit4',
      code: 'Digit4',
      content: [
        {
          lang: 'rus',
          down: '4',
          up: ';',
        },
        {
          lang: 'eng',
          down: '4',
          up: '$',
        }
      ],
    },
    {
      name: 'Digit5',
      code: 'Digit5',
      content: [
        {
          lang: 'rus',
          down: '5',
          up: '%',
        },
        {
          lang: 'eng',
          down: '5',
          up: '%',
        }
      ],
    },
    {
      name: 'Digit6',
      code: 'Digit6',
      content: [
        {
          lang: 'rus',
          down: '6',
          up: ':',
        },
        {
          lang: 'eng',
          down: '6',
          up: '^',
        }
      ],
    },
    {
      name: 'Digit7',
      code: 'Digit7',
      content: [
        {
          lang: 'rus',
          down: '7',
          up: '?',
        },
        {
          lang: 'eng',
          down: '7',
          up: '&',
        }
      ],
    },
    {
      name: 'Digit8',
      code: 'Digit8',
      content: [
        {
          lang: 'rus',
          down: '8',
          up: '*',
        },
        {
          lang: 'eng',
          down: '8',
          up: '*',
        }
      ],
    },
    {
      name: 'Digit9',
      code: 'Digit9',
      content: [
        {
          lang: 'rus',
          down: '9',
          up: '(',
        },
        {
          lang: 'eng',
          down: '9',
          up: '(',
        }
      ],
    },
    {
      name: 'Digit0',
      code: 'Digit0',
      content: [
        {
          lang: 'rus',
          down: '0',
          up: ')',
        },
        {
          lang: 'eng',
          down: '0',
          up: ')',
        }
      ],
    },
    {
      name: 'Minus',
      code: 'Minus',
      content: [
        {
          lang: 'rus',
          down: '-',
          up: '_',
        },
        {
          lang: 'eng',
          down: '-',
          up: '_',
        }
      ],
    },
    {
      name: 'Equal',
      code: 'Equal',
      content: [
        {
          lang: 'rus',
          down: '=',
          up: '+',
        },
        {
          lang: 'eng',
          down: '=',
          up: '+',
        }
      ],
    },
    {
      name: 'Backspace',
      code: 'Backspace',
      content: [
        {
          lang: 'rus',
          down: 'Backspace',
          up: 'Backspace',
        },
        {
          lang: 'eng',
          down: 'Backspace',
          up: 'Backspace',
        }
      ],
    },
  ],
  row2: [
    {
      name: 'Tab',
      code: 'Tab',
      content: [
        {
          lang: 'rus',
          down: 'Tab',
          up: 'Tab',
        },
        {
          lang: 'eng',
          down: 'Tab',
          up: 'Tab',
        }
      ],
    },
    {
      name: 'KeyQ',
      code: 'KeyQ',
      content: [
        {
          lang: 'rus',
          down: 'й',
          up: 'Й',
        },
        {
          lang: 'eng',
          down: 'q',
          up: 'Q',
        }
      ],
    },
    {
      name: 'KeyW',
      code: 'KeyW',
      content: [
        {
          lang: 'rus',
          down: 'ц',
          up: 'Ц',
        },
        {
          lang: 'eng',
          down: 'w',
          up: 'W',
        }
      ],
    },
    {
      name: 'KeyE',
      code: 'KeyE',
      content: [
        {
          lang: 'rus',
          down: 'у',
          up: 'У',
        },
        {
          lang: 'eng',
          down: 'e',
          up: 'E',
        }
      ],
    },
    {
      name: 'KeyR',
      code: 'KeyR',
      content: [
        {
          lang: 'rus',
          down: 'к',
          up: 'К',
        },
        {
          lang: 'eng',
          down: 'r',
          up: 'R',
        }
      ],
    },
    {
      name: 'KeyT',
      code: 'KeyT',
      content: [
        {
          lang: 'rus',
          down: 'е',
          up: 'Е',
        },
        {
          lang: 'eng',
          down: 't',
          up: 'T',
        }
      ],
    },
    {
      name: 'KeyY',
      code: 'KeyY',
      content: [
        {
          lang: 'rus',
          down: 'н',
          up: 'Н',
        },
        {
          lang: 'eng',
          down: 'y',
          up: 'Y',
        }
      ],
    },
    {
      name: 'KeyU',
      code: 'KeyU',
      content: [
        {
          lang: 'rus',
          down: 'г',
          up: 'Г',
        },
        {
          lang: 'eng',
          down: 'u',
          up: 'u',
        }
      ],
    },
    {
      name: 'KeyI',
      code: 'KeyI',
      content: [
        {
          lang: 'rus',
          down: 'ш',
          up: 'Ш',
        },
        {
          lang: 'eng',
          down: 'i',
          up: 'I',
        }
      ],
    },
    {
      name: 'KeyO',
      code: 'KeyO',
      content: [
        {
          lang: 'rus',
          down: 'щ',
          up: 'Щ',
        },
        {
          lang: 'eng',
          down: 'o',
          up: 'O',
        }
      ],
    },
    {
      name: 'KeyP',
      code: 'KeyP',
      content: [
        {
          lang: 'rus',
          down: 'з',
          up: 'З',
        },
        {
          lang: 'eng',
          down: 'p',
          up: 'P',
        }
      ],
    },
    {
      name: 'BracketLeft',
      code: 'BracketLeft',
      content: [
        {
          lang: 'rus',
          down: 'х',
          up: 'Х',
        },
        {
          lang: 'eng',
          down: '[',
          up: '{',
        }
      ],
    },
    {
      name: 'BracketRight',
      code: 'BracketRight',
      content: [
        {
          lang: 'rus',
          down: 'ъ',
          up: 'Ъ',
        },
        {
          lang: 'eng',
          down: ']',
          up: '}',
        }
      ],
    },
    {
      name: 'Backslash',
      code: 'Backslash',
      content: [
        {
          lang: 'rus',
          down: '\\',
          up: '/',
        },
        {
          lang: 'eng',
          down: '\\',
          up: '|',
        }
      ],
    },
  ],
  row3: [
    {
      name: 'CapsLock',
      code: 'CapsLock',
      content: [
        {
          lang: 'rus',
          down: 'CapsLock',
          up: 'CapsLock',
        },
        {
          lang: 'eng',
          down: 'CapsLock',
          up: 'CapsLock',
        }
      ],
    },
    {
      name: 'KeyA',
      code: 'KeyA',
      content: [
        {
          lang: 'rus',
          down: 'ф',
          up: 'Ф',
        },
        {
          lang: 'eng',
          down: 'a',
          up: 'A',
        }
      ],
    },
    {
      name: 'KeyS',
      code: 'KeyS',
      content: [
        {
          lang: 'rus',
          down: 'ы',
          up: 'Ы',
        },
        {
          lang: 'eng',
          down: 's',
          up: 'S',
        }
      ],
    },
    {
      name: 'KeyD',
      code: 'KeyD',
      content: [
        {
          lang: 'rus',
          down: 'в',
          up: 'В',
        },
        {
          lang: 'eng',
          down: 'd',
          up: 'D',
        }
      ],
    },
    {
      name: 'KeyF',
      code: 'KeyF',
      content: [
        {
          lang: 'rus',
          down: 'а',
          up: 'А',
        },
        {
          lang: 'eng',
          down: 'f',
          up: 'F',
        }
      ],
    },
    {
      name: 'KeyG',
      code: 'KeyG',
      content: [
        {
          lang: 'rus',
          down: 'п',
          up: 'П',
        },
        {
          lang: 'eng',
          down: 'g',
          up: 'G',
        }
      ],
    },
    {
      name: 'KeyH',
      code: 'KeyH',
      content: [
        {
          lang: 'rus',
          down: 'р',
          up: 'Р',
        },
        {
          lang: 'eng',
          down: 'h',
          up: 'H',
        }
      ],
    },
    {
      name: 'KeyJ',
      code: 'KeyJ',
      content: [
        {
          lang: 'rus',
          down: 'о',
          up: 'О',
        },
        {
          lang: 'eng',
          down: 'j',
          up: 'J',
        }
      ],
    },
    {
      name: 'KeyK',
      code: 'KeyK',
      content: [
        {
          lang: 'rus',
          down: 'л',
          up: 'Л',
        },
        {
          lang: 'eng',
          down: 'k',
          up: 'K',
        }
      ],
    },
    {
      name: 'KeyL',
      code: 'KeyL',
      content: [
        {
          lang: 'rus',
          down: 'д',
          up: 'Д',
        },
        {
          lang: 'eng',
          down: 'l',
          up: 'L',
        }
      ],
    },
    {
      name: 'Semicolon',
      code: 'Semicolon',
      content: [
        {
          lang: 'rus',
          down: 'ж',
          up: 'Ж',
        },
        {
          lang: 'eng',
          down: ';',
          up: ':',
        }
      ],
    },
    {
      name: 'Quote',
      code: 'Quote',
      content: [
        {
          lang: 'rus',
          down: 'э',
          up: 'Э',
        },
        {
          lang: 'eng',
          down: "'",
          up: '"',
        }
      ],
    },
    {
      name: 'Enter',
      code: 'Enter',
      content: [
        {
          lang: 'rus',
          down: 'Enter',
          up: 'Enter',
        },
        {
          lang: 'eng',
          down: 'Enter',
          up: 'Enter',
        }
      ],
    },
  ],
  row4: [
    {
      name: 'ShiftLeft',
      code: 'ShiftLeft',
      content: [
        {
          lang: 'rus',
          down: 'Shift',
          up: 'Shift',
        },
        {
          lang: 'eng',
          down: 'Shift',
          up: 'Shift',
        }
      ],
    },
    {
      name: 'KeyZ',
      code: 'KeyZ',
      content: [
        {
          lang: 'rus',
          down: 'я',
          up: 'Я',
        },
        {
          lang: 'eng',
          down: 'z',
          up: 'Z',
        }
      ],
    },
    {
      name: 'KeyX',
      code: 'KeyX',
      content: [
        {
          lang: 'rus',
          down: 'ч',
          up: 'Ч',
        },
        {
          lang: 'eng',
          down: 'x',
          up: 'X',
        }
      ],
    },
    {
      name: 'KeyC',
      code: 'KeyC',
      content: [
        {
          lang: 'rus',
          down: 'с',
          up: 'С',
        },
        {
          lang: 'eng',
          down: 'c',
          up: 'C',
        }
      ],
    },
    {
      name: 'KeyV',
      code: 'KeyV',
      content: [
        {
          lang: 'rus',
          down: 'м',
          up: 'М',
        },
        {
          lang: 'eng',
          down: 'v',
          up: 'V',
        }
      ],
    },
    {
      name: 'KeyB',
      code: 'KeyB',
      content: [
        {
          lang: 'rus',
          down: 'и',
          up: 'И',
        },
        {
          lang: 'eng',
          down: 'b',
          up: 'B',
        }
      ],
    },
    {
      name: 'KeyN',
      code: 'KeyN',
      content: [
        {
          lang: 'rus',
          down: 'т',
          up: 'Т',
        },
        {
          lang: 'eng',
          down: 'n',
          up: 'N',
        }
      ],
    },
    {
      name: 'KeyM',
      code: 'KeyM',
      content: [
        {
          lang: 'rus',
          down: 'ь',
          up: 'Ь',
        },
        {
          lang: 'eng',
          down: 'm',
          up: 'M',
        }
      ],
    },
    {
      name: 'Comma',
      code: 'Comma',
      content: [
        {
          lang: 'rus',
          down: 'б',
          up: 'Б',
        },
        {
          lang: 'eng',
          down: ',',
          up: '<',
        }
      ],
    },
    {
      name: 'Period',
      code: 'Period',
      content: [
        {
          lang: 'rus',
          down: 'ю',
          up: 'Ю',
        },
        {
          lang: 'eng',
          down: '.',
          up: '>',
        }
      ],
    },
    {
      name: 'Slash',
      code: 'Slash',
      content: [
        {
          lang: 'rus',
          down: '.',
          up: ',',
        },
        {
          lang: 'eng',
          down: '/',
          up: '?',
        }
      ],
    },
    {
      name: 'ArrowUp',
      code: 'ArrowUp',
      content: [
        {
          lang: 'rus',
          down: '▲',
          up: '▲',
        },
        {
          lang: 'eng',
          down: '▲',
          up: '▲',
        }
      ],
    },
    {
      name: 'ShiftRight',
      code: 'ShiftRight',
      content: [
        {
          lang: 'rus',
          down: 'Shift',
          up: 'Shift',
        },
        {
          lang: 'eng',
          down: 'Shift',
          up: 'Shift',
        }
      ],
    },
  ],
  row5: [
    {
      name: 'ControlLeft',
      code: 'ControlLeft',
      content: [
        {
          lang: 'rus',
          down: 'Ctrl',
          up: 'Ctrl',
        },
        {
          lang: 'eng',
          down: 'Ctrl',
          up: 'Ctrl',
        }
      ],
    },
    {
      name: 'MetaLeft',
      code: 'MetaLeft',
      content: [
        {
          lang: 'rus',
          down: 'Win',
          up: 'Win',
        },
        {
          lang: 'eng',
          down: 'Win',
          up: 'Win',
        }
      ],
    },
    {
      name: 'AltLeft',
      code: 'AltLeft',
      content: [
        {
          lang: 'rus',
          down: 'Alt',
          up: 'Alt',
        },
        {
          lang: 'eng',
          down: 'Alt',
          up: 'Alt',
        }
      ],
    },
    {
      name: 'Space',
      code: 'Space',
      content: [
        {
          lang: 'rus',
          down: ' ',
          up: ' ',
        },
        {
          lang: 'eng',
          down: ' ',
          up: ' ',
        }
      ],
    },
    {
      name: 'AltRight',
      code: 'AltRight',
      content: [
        {
          lang: 'rus',
          down: 'Alt',
          up: 'Alt',
        },
        {
          lang: 'eng',
          down: 'Alt',
          up: 'Alt',
        }
      ],
    },
    {
      name: 'ArrowLeft',
      code: 'ArrowLeft',
      content: [
        {
          lang: 'rus',
          down: '◄',
          up: '◄',
        },
        {
          lang: 'eng',
          down: '◄',
          up: '◄',
        }
      ],
    },
    {
      name: 'ArrowDown',
      code: 'ArrowDown',
      content: [
        {
          lang: 'rus',
          down: '▼',
          up: '▼',
        },
        {
          lang: 'eng',
          down: '▼',
          up: '▼',
        }
      ],
    },
    {
      name: 'ArrowRight',
      code: 'ArrowRight',
      content: [
        {
          lang: 'rus',
          down: '►',
          up: '►',
        },
        {
          lang: 'eng',
          down: '►',
          up: '►',
        }
      ],
    },
    {
      name: 'ControlRight',
      code: 'ControlRight',
      content: [
        {
          lang: 'rus',
          down: 'Ctrl',
          up: 'Ctrl',
        },
        {
          lang: 'eng',
          down: 'Ctrl',
          up: 'Ctrl',
        }
      ],
    },
  ]
}

const changeCaseCycle = (up, down) => {
  for (let i = 0; i < up.length; i++) {
    up[i].classList.toggle('hidden')
    down[i].classList.toggle('hidden')
  }
}

const tab = (contentTextArea) => { contentTextArea.value += '    ' }

const backSpace = (contentTextArea) => { contentTextArea.value = contentTextArea.value.slice(0, -1) }

const changeLang = () => {
  const rus = document.getElementsByClassName('rus')
  const eng = document.getElementsByClassName('eng')

  let currentLang
  let set = new Set

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Alt') { event.preventDefault() }

    if (event.key == 'Shift' || event.key == 'Alt') { set.add(event.key) }

    if (set.size == 2) {
      for (let i = 0; i < rus.length; i++) {
        rus[i].classList.toggle('hidden')
        eng[i].classList.toggle('hidden')
        rus[i].classList.toggle('show')
        eng[i].classList.toggle('show')
      }
      set = new Set
      currentLang = document.getElementsByClassName('show')[0].classList[0]
      sessionStorage.setItem('language', currentLang)
    }
  })

  if (sessionStorage.getItem('language')) {
    switch (sessionStorage.getItem('language')) {
      case 'rus':
        for (let i = 0; i < rus.length; i++) {
          rus[i].classList.add('show')
          rus[i].classList.remove('hidden')
          eng[i].classList.add('hidden')
          eng[i].classList.remove('show')
        }
        break;
      case 'eng':
        for (let i = 0; i < rus.length; i++) {
          eng[i].classList.add('show')
          eng[i].classList.remove('hidden')
          rus[i].classList.add('hidden')
          rus[i].classList.remove('show')
        }
        break;
    }
  }
}

const changeCase = () => {
  const up = document.getElementsByClassName('up')
  const down = document.getElementsByClassName('down')

  let isShiftPressed = false

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') {
      if (!isShiftPressed) {
        changeCaseCycle(up, down)
      }

      isShiftPressed = true
    }
  })

  document.onkeyup = (e) => {
    if (e.key === 'Shift') {
      isShiftPressed = false
      changeCaseCycle(up, down)
    }

    if (e.code == 'CapsLock') {
      changeCaseCycle(up, down)
    }
  }
}

const activePressKey = () => {
  document.addEventListener('keydown', (e) => {
    let currentClick = document.getElementsByClassName(e.code)
    currentClick[0].classList.add('active')
  })

  document.addEventListener('keyup', (e) => {
    let currentClick = document.getElementsByClassName(e.code)
    currentClick[0].classList.remove('active')
  })
}

const renderContainer = () => {
  const container = document.createElement('div')
  container.classList.add('container')
  document.body.appendChild(container)

  const textContent = document.createElement('div')
  textContent.classList.add('textContent')

  const text = document.createElement('textarea')
  text.classList.add('textarea')
  textContent.appendChild(text)

  container.appendChild(textContent)

  const keyboard = document.createElement('div')
  keyboard.classList.add('keyboard')
  container.appendChild(keyboard)

  for (let key in state) {
    const row = document.createElement('div')
    row.classList.add('row')
    keyboard.appendChild(row)

    state[key].map((item) => {
      const key = document.createElement('div')
      key.classList.add('key')
      key.classList.add(item.name)
      row.appendChild(key)

      const rus = document.createElement('span')
      rus.classList.add('rus')
      rus.classList.add('hidden')
      key.appendChild(rus)

      const eng = document.createElement('span')
      eng.classList.add('eng')
      eng.classList.add('show')
      key.appendChild(eng)

      for (let i = 0; i < item.content.length; i++) {
        const down = document.createElement('span')
        down.classList.add('down')
        const downText = document.createTextNode(item.content[i].down)
        down.appendChild(downText)

        const up = document.createElement('span')
        up.classList.add('up')
        up.classList.add('hidden')
        const upText = document.createTextNode(item.content[i].up)
        up.appendChild(upText)

        const currentString = [
          rus,
          eng
        ]

        currentString[i].appendChild(down)
        currentString[i].appendChild(up)
      }
    })
  }
}

const typeText = () => {
  const up = document.getElementsByClassName('up')
  const down = document.getElementsByClassName('down')

  let contentTextArea = document.getElementsByClassName('textarea')[0]
  let isFocus = false

  document.getElementsByTagName('textarea')[0].onfocus = () => { isFocus = true }
  contentTextArea.addEventListener('blur', () => { isFocus = false })

  document.addEventListener('keypress', (e) => {
    let keyCode = e.code
    let childsKey = Array.from(document.getElementsByClassName(`${keyCode}`)[0].children)
    let currentPressKey
    childsKey.map((item, i) => {
      if (item.classList[1] === 'show') {
        currentPressKey = childsKey[i].innerText
      }
    })

    if (currentPressKey.length > 1) { currentPressKey = '' }

    if (e.code === 'Space') { contentTextArea.value += ' ' }

    if (isFocus === false) {
      contentTextArea.value += currentPressKey
    } else {
      e.preventDefault()
      contentTextArea.value += currentPressKey
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      tab(contentTextArea)
    }

    if (isFocus === false) {
      if (e.key === 'Backspace') { backSpace(contentTextArea) }
    }
  })

  document.addEventListener('click', (e) => {
    let clickedItem = e.target.classList[0]

    switch (e.target.innerText) {
      case 'Backspace':
        backSpace(contentTextArea)
        break;
      case 'Tab':
        tab(contentTextArea)
        break;
      case 'CapsLock':
        changeCaseCycle(up, down)
        break;
      case 'Space':
        contentTextArea.value += ' '
        break;
    }

    if (clickedItem === 'down' || clickedItem === 'up' || clickedItem === 'key') {
      let currentSymbol = e.toElement.innerText
      if (currentSymbol.length == 1) { contentTextArea.value += currentSymbol }
    }
  })
}