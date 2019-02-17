import { BASE_URL } from '../api'
import requester from '../requester'

const resourceUrl = `${BASE_URL}`

function register ({name, email, password}) {
  const serviceUrl = `${resourceUrl}/users`
  return requester.post(serviceUrl, {name, email, password}, false)
}

function login ({email, password}) {
  const serviceUrl = `${resourceUrl}/users/login`
  return requester.post(serviceUrl, {email, password}, false)
}

function logout (token) {
  const serviceUrl = `${resourceUrl}/users/logout`
  return requester.post(serviceUrl, {token}, false)
}

function getOrganizers () {
  const serviceUrl = `${resourceUrl}/organizers`
  return requester.get(serviceUrl)
}

export default {
  login,
  register,
  logout,
  getOrganizers
}
