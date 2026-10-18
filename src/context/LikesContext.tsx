import { createContext, useContext, useState, type ReactNode } from 'react'

type LikesContextValue = {
  isLiked: (postId: number) => boolean
  toggleLike: (postId: number) => void
}

const LikesContext = createContext<LikesContextValue | null>(null)

export function LikesProvider({ children }: { children: ReactNode }) {
  // one entry per post, so every post keeps its own value
  const [liked, setLiked] = useState<Record<number, boolean>>({})

  function isLiked(postId: number) {
    return liked[postId] === true
  }

  function toggleLike(postId: number) {
    setLiked((prev) => ({ ...prev, [postId]: !prev[postId] }))
  }

  return (
    <LikesContext.Provider value={{ isLiked, toggleLike }}>
      {children}
    </LikesContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLikes() {
  const value = useContext(LikesContext)
  if (value === null) {
    throw new Error('useLikes must be used inside LikesProvider')
  }
  return value
}
