'use strict'

const fetch = require('node-fetch')

module.exports = function (ip, callback) {
  if (typeof ip === 'function' && callback === undefined) {
    callback = ip
    ip = 'json'
  }

  const URL_PREFIX = 'https://ipsidekick.com/'
  const url = `${URL_PREFIX}${ip}`
  fetch(url)
    .then(res => res.json())
    .then(body => {
      if (body.error) {
        callback(body, null)
      } else {
        callback(null, body)
      }
    })
    .catch(err => callback(err, null))
}
