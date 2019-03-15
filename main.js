import { API_VERSION, NEW_VERION } from './constants'

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.baseURL = API_VERSION

const token = document.head.querySelector('meta[name="csrf-token"]')
const isFailable = false
// Sua lan 3
const canFail = false
if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}

