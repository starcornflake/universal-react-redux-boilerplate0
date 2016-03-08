import axios from 'axios'

const id = "YOUR_CLIENT_ID"
const sec = "YOUR_SECRET_ID"
const param = `?client_id=${id}&client_secret=${sec}`

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username + param}`)
}

export async function getPlayersInfo(players) {
  try {
      // const promise = new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve()
      //   }, 5000)
      // })
      // const info = await Promise.all(players.map((username) => getUserInfo(username)).concat(promise))
      // return info.map((user) => {
      //   if (user.data !== 'undefined') return user.data
      // })
    const info = await Promise.all(players.map((username) => getUserInfo(username)))
    return info.map((user) => user.data)
  } catch (err) {
    console.warn('Error in getPlayersInfo:', err)
  }
}
