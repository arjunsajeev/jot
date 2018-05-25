const storageKey = 'writer-app'
const storage = {
  get() {
    if (this.exists())
      return JSON.parse(localStorage.getItem(storageKey))
  },
  set(data) {
    if (window.localStorage)
      localStorage.setItem(storageKey, JSON.stringify(data))
  },
  exists() {
    return window.localStorage && localStorage.getItem(storageKey)
  }
}

module.exports = storage