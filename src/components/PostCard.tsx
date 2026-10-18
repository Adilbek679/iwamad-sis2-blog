import { Link } from 'react-router'
import type { Post } from '../data/posts'
import { formatDate } from '../utils/formatDate'
import Card from './ui/Card'
import Tag from './ui/Tag'
import LikeButton from './LikeButton'

type PostCardProps = {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <h2 className="card-title">{post.title}</h2>
      <time className="text-muted" dateTime={post.date}>{formatDate(post.date)}</time>
      <p>{post.excerpt}</p>
      <div className="tag-row">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <div className="card-actions">
        <Link className="btn btn-secondary" to={`/posts/${post.id}`}>
          Read more
        </Link>
        <LikeButton postId={post.id} />
      </div>
    </Card>
  )
}

export default PostCard
