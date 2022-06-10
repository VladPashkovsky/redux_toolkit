import React from 'react'
import { IPost } from '../../models/IPost'

interface PostItemProps {
  post: IPost
  update: (post: IPost) => void
  remove: (post: IPost) => void
}

const PostItem: React.FC<PostItemProps> = ({ post, update, remove }) => {
  const postRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(post)
  }

  const postUpdate = (event: React.MouseEvent) => {
    const title = prompt() || ''
    update({ ...post, title })
  }

  return (
    <div className="post" onClick={postUpdate}>
      {post.id} : {post.title}: {post.body}
      <button onClick={postRemove}>Delete</button>
    </div>
  )
}

export default PostItem
