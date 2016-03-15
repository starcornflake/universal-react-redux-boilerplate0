import express from 'express'
import jwt from 'jsonwebtoken'
import XSRF from 'csrf'

const api = express.Router();

const secret = 'secret'
const xsrf = new XSRF()

function createJWTToken(user) {
  return jwt.sign(user, secret)
}

function createXSRFToken() {
  return xsrf.create(xsrf.secretSync())
}

api.get('/todos', (req, res) => {
  console.log('Cookie: ', req.cookies)
  console.log('Header: ', req.headers)
  res.json({data:[{id:10,text:'server1',completed:false},{id:11,text:'server2',completed:false}]})
})

api.get('/users/:username/todos', (req, res) => {
  res.json({data:[{id:10,text:'server1',completed:false},{id:11,text:'server2',completed:false}]})
})

// Login
api.post('/sessions', (req, res) => {
  console.log(req.body)
  const { username, password } = req.body
  if (!username || !password) {
    console.log('please enter username or password')
    res.json({error: {code:400, message: 'please enter username or password'}})
    return
  }

  if (username !== 'bk' || password !== 'bk') {
    console.log('wrong username or password')
    res.json({error: {code:400, message: 'wrong username or password'}})
    return
  }

  // TODO: use secure cookie so it only works on https
  res.cookie('jwt', createJWTToken({username, admin: false}))
  res.cookie('xsrf_token', createXSRFToken())
  res.json({data:'success'})
})



export default api


// use the following JSON API responses (Google JSON GUIDE):
// SUCCESS
// {
//   "data": {
//     "id": 1001,
//     "name": "Wing"
//   }
// }
// ERROR
// {
//   "error": {
//     "code": 404,
//     "message": "ID not found"
//   }
// }
