import express from 'express'

const api = express.Router();

api.get('/todos', (req, res) => {
  res.json([{id:10,text:'server1',completed:false},{id:11,text:'server2',completed:false}])
})

export default api
