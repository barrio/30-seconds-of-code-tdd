'use strict'

var exports = (module.exports = {})

exports.equals = (a, b) => {
  if (a === b) return true
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
    return a === b
  /*
  if (a == null || b == null) return false
  if (a.prototype !== b.prototype) return false
  */
  let keys = Object.keys(a)
  if (keys.length !== Object.keys(b).length) return false
  return keys.every(k => exports.equals(a[k], b[k]))
}

// Arrays
exports.all = (arr, fn = Boolean) => arr.every(fn)
exports.any = (arr, fn = Boolean) => arr.some(fn)
exports.removeFalsy = arr => arr.filter(Boolean)

// Objects
exports.isEmptyObject = obj => Object.keys(obj).toString() === ''
