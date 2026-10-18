import { useLikes } from '../context/LikesContext'
import Button from './ui/Button'

type LikeButtonProps = {
  postId: number
}

function LikeButton({ postId }: LikeButtonProps) {
  const { isLiked, toggleLike } = useLikes()
  const liked = isLiked(postId)

  return (
    <Button
      variant={liked ? 'primary' : 'secondary'}
      aria-pressed={liked}
      onClick={() => toggleLike(postId)}
    >
      {liked ? '♥ Liked' : '♡ Like'}
    </Button>
  )
}

export default LikeButton
