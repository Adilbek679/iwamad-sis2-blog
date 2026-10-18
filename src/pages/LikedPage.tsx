import { Link } from 'react-router'
import { latestFirst } from '../data/posts'
import { useLikes } from '../context/LikesContext'
import PostList from '../components/PostList'

function LikedPage() {
  const { isLiked } = useLikes()
  const likedPosts = latestFirst.filter((post) => isLiked(post.id))

  return (
    <>
      <h1>Liked posts</h1>
      {likedPosts.length === 0 ? (
        <p>
          You have not liked any posts yet. <Link to="/posts">Browse the posts</Link> and press Like.
        </p>
      ) : (
        <PostList items={likedPosts} />
      )}
    </>
  )
}

export default LikedPage
