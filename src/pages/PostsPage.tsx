import { latestFirst } from '../data/posts'
import PostList from '../components/PostList'

function PostsPage() {
  return (
    <>
      <h1>Posts</h1>
      <PostList items={latestFirst} />
    </>
  )
}

export default PostsPage
