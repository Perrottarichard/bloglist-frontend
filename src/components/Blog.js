import React from 'react'

const Blog = (props) => {

  const {blog} = props
  return (
    <div>
      "<strong>{blog.title}"</strong> by: {blog.author}
    </div>
  )
}
export default Blog
