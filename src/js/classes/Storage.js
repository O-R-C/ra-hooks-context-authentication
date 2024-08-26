class Storage {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get(key) {
    return JSON.parse(localStorage.getItem(key)) || null
  }

  remove(key) {
    localStorage.removeItem(key)
  }
}

export default Storage
