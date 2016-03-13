import express from 'express'

const api = express.Router();

api.get('/todos', (req, res) => {
  console.log('req to api,', req.headers)
  res.json({data:[{id:10,text:'server1',completed:false},{id:11,text:'server2',completed:false}]})
})

export default api
