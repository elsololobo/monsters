import { jsonRequest } from './apiRequest'

const baseUrl = 'https://jsonplaceholder.typicode.com'
export function fetchUsers() {
  return jsonRequest(
    `${baseUrl}/users`,
    null,
    'GET'
  )
}
export function fetchUserAlbums(userId) {
  return jsonRequest(
    `${baseUrl}/users/${userId}/albums`,
    null,
    'GET'
  )
}
export function fetchAlbumPhotos(albumId) {
  return jsonRequest(
    `${baseUrl}/albums/${albumId}/photos`,
    null,
    'GET'
  )
}
