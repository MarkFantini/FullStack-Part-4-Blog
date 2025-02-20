const postsRouter = require('express').Router()
const Blog = require('../models/blog')

postsRouter.get('/', (request, response, next) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
    .catch(error => {
      console.log('Error', error.message)
      next(error)
    })
})

postsRouter.post('/', (request, response, next) => {
  const body = request.body

  const post = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  })

  post.save()
    .then(savedPost => {
      response.json(savedPost)
    })
    .catch(error => next(error))
})

module.exports = postsRouter