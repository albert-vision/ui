import { BASE_URL } from '../api'
import requester from '../requester'

const resourceUrl = `${BASE_URL}`

function generate (project) {
  const serviceUrl = `${resourceUrl}`
  return requester.post(serviceUrl, project, false)
}

export default {
  generate
}
