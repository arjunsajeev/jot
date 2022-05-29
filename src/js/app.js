require('../css/quill.snow.css')
require('../css/style.css')
const Quill = require('quill')
const debounce = require('./debounce')
const storage = require('./storage')

const quill = new Quill('#editor', {
  placeholder: 'Compose an epic..',
  theme: 'snow',
})

const save = () => {
  storage.set(quill.getContents())
}

const initialize = () => {
  if (storage.exists()) {
    quill.setContents(storage.get())
  }
  quill.on('text-change', debounce(save))
}

initialize()
