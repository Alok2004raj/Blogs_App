import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px] mx-w[1250px] flex  flex-col flex-wrap    '>
      <NavLink to={`/blog/${post.id}`} >
        <span className=' text-black font-bold text-lg '>{post.title}</span>
      </NavLink>
      <p>
        By <span className="font-mono  italic">{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className=' text-black text-sm  font-bold underline'>{post.category}</span>
        </NavLink>
      </p>
      <p className='  font-semibold'> Posted on {post.date} </p>
      <p className='font-serif'> {post.content}</p>
      <div className=' '>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='  text-blue-700 underline  m-1 '>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
