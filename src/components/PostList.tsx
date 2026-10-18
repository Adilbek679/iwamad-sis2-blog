import type { Post } from '../data/posts'
import PostCard from './PostCard'

type PostListProps = {
  items: Post[]
}

function PostList({ items }: PostListProps) {
  return (
    <div className="post-grid">
      {items.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
