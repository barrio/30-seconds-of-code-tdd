'use strict'

var exports = (module.exports = {})

exports.all = (arr, fn = Boolean) => arr.every(fn)
exports.any = (arr, fn = Boolean) => arr.some(fn)
