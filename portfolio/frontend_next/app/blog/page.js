import React from 'react';
import Link from 'next/link';
const blog=[
    {
        title:'First blog',
        description:'This is my first blog discripton.',
        slug:'first blog',
        date:'11-11-11',
        author:'John wick',
        image:'/download.png'
    },
    {
        title:'second blog',
        description:'This is my first blog discripton.',
        slug:'second blog',
        date:'11-11-11',
        author:'John wick',
        image:'/download.png'
    }
]

const Blog = () => {
  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Blog</h1>
        <div className='grid grid-cols-1 mid:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blog.map((blog,index)=>(
                <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden'>
                    <img src={blog.image} alt={blog.title} className='w-full h-62 object-cover'/>
                    <div className='p-4'>
                        <h2 className='text-2xl font-bold mb-2'>{blog.title}</h2>
                        <p className='text-gray-600 mb-4'>{blog.description}</p>
                        <div className='text-sm text-gray-500 mb-4'>
                            <span>By {blog.author}</span> | <span>{new Date(blog.date).toDateString()}</span>
                        </div>
                        <Link className='m-2' variant="outline" href={`/blogpost/${blog.slug}`}>Read More</Link>
                        </div></div>

            ))}
        </div>
      
    </div>
  )
}

export default Blog
