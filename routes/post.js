import Router from 'express'
import PostController from '../controllers/post.js'

const post = new Router()

post.post('/posts', PostController.create)
post.get('/posts', PostController.getAll)
post.get('/posts/:id', PostController.getOne)
post.put('/posts', PostController.update)
post.delete('/posts/:id', PostController.delete)

export default post
