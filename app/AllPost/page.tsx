import React from 'react'
import CreatePost from '../components/post/CreatePost'
import ViewPost from '../components/post/ViewPost'

const AllPost = () => {
  return (
   <>
 <h1 className="text-4xl font-bold text-center py-2 mb-4 text-gray-300">News Feed</h1>

    <ViewPost />

  <CreatePost />
</>

  )
}

export default AllPost