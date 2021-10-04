const express = require('express')
const Post = require('./post-model')

const router = express.Router()

async function checkId(req, res, next) {
  try{
    const post = await Post.getById(req.params.id)
    if(post){
      req.post = post
      next()
    }
    else{
      res.status(404).json({message:"post not found"})
    } 
  }catch(err){
    next(err)
  }
}

function checkPayload(req, res, next) {
  const {title, contents} = req.body
  if(title && contents){
    next();
  }else{
    res.status(400).json({message:"title and contents required"})
  }
}

router.get('/', async (req, res, next) => {
  try {
    const data = await Post.get()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkId, async (req, res, next) => {
  try {
    const data = await Post.getById(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/', checkPayload, async (req, res, next) => {
  try {
    const data = await Post.create(req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', checkPayload, checkId, async (req, res, next) => {
  try {
    const data = await Post.update(req.params.id, req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', checkId, async (req, res, next) => {
  try {
    const data = await Post.remove(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router
