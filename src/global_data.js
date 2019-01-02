const globalData = {
    topNavHeight: 0,
    currentList:{},
    currentPlaying:{},
}

export function set (key, val) {
  globalData[key] = val
}

export function get (key) {
  return globalData[key]
}