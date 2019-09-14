'use strict'

var exports = (module.exports = {})

exports.all = (arr, fn = Boolean) => arr.every(fn)
exports.any = (arr, fn = Boolean) => arr.some(fn)
exports.removeFalsy = arr => arr.filter(Boolean)
exports.isEmptyObject = obj => Object.keys(obj).toString() === ''
