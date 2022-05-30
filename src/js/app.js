import '../css/quill.snow.css'
import '../css/style.css'
import Quill from 'quill'
import debounce from './debounce'
import storage from './storage'

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
