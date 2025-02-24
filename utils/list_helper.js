const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item
  }

  const likesPerBlog = blogs.map(blog => blog.likes)

  return blogs.length === 0
    ? 0
    : likesPerBlog.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  let goal = 0

  blogs.map(blog => blog.likes).forEach(like => {
    if (like >= goal) {
      goal = like
    }
  })

  const mostLikes = blogs.find(blog => blog.likes === goal)

  const blog = {
    title: mostLikes.title,
    author: mostLikes.author,
    likes: mostLikes.likes
  }

  return blog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}