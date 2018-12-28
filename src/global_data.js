const globalData = {
    topNavHeight: 0
}

export function set (key, val) {
  globalData[key] = val
}

export function get (key) {
  return globalData[key]
}