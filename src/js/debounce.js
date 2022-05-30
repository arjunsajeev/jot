const debounce = (fn, ...args) => {
  let timeout
  let later = () => {
    ;(timeout = null), fn.apply(this, args)
  }
  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(later, 500)
  }
}

export default debounce
