import React, { useState } from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'
import { IPost } from '../../models/IPost'

const PostContainer: React.FC = () => {
  const [limit, setLimit] = useState(10)
  //    pollingInterval - через определенный промежуток времени мы получаем обновленные данные
  const { data: posts, isLoading, error, refetch, } = postAPI.useFetchAllPostsQuery(limit, {
    // pollingInterval: 1000
  })
  const [createPost, { isLoading: createIsLoading, error: createError }] = postAPI.useCreatePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  const addNewPost = async () => {
    const title = prompt()
    await createPost({ title, body: title } as IPost)
  }

  const postUpdate = (post: IPost) => {
    updatePost(post)
  }

  const postRemove = (post: IPost) => {
    deletePost(post)
  }

  return (
    <div className="post__list">
      <button onClick={() => refetch()}>REFETCH</button>
      <button onClick={addNewPost}>ADD NEW POST</button>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {posts &&
        posts.map((post) => (
          <PostItem key={post.id} post={post} remove={postRemove} update={postUpdate}
          />
        ))}
    </div>
  )
}

export default PostContainer
