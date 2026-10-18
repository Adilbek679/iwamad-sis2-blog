import { Link, useParams } from 'react-router'
import { posts } from '../data/posts'
import { formatDate } from '../utils/formatDate'
import Tag from '../components/ui/Tag'
import LikeButton from '../components/LikeButton'

function PostPage() {
  const { id } = useParams()
  // useParams gives a string, so convert it before comparing
  const post = posts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <>
        <h1>Post not found</h1>
        <p>There is no post with the id "{id}".</p>
        <Link to="/posts">Back to all posts</Link>
      </>
    )
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <time className="text-muted" dateTime={post.date}>{formatDate(post.date)}</time>
      <div className="tag-row">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      {post.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <div className="card-actions">
        <Link to="/posts">&larr; Back to all posts</Link>
        <LikeButton postId={post.id} />
      </div>
    </article>
  )
}

export default PostPage
