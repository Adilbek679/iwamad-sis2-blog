import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LikeButton from './LikeButton'
import { LikesProvider } from '../context/LikesContext'

describe('LikeButton', () => {
  it('changes its text after a click', async () => {
    render(
      <LikesProvider>
        <LikeButton postId={1} />
      </LikesProvider>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('♡ Like')

    await userEvent.click(button)

    expect(button).toHaveTextContent('♥ Liked')
  })

  it('keeps a separate value for each post', async () => {
    render(
      <LikesProvider>
        <LikeButton postId={1} />
        <LikeButton postId={2} />
      </LikesProvider>,
    )
    const [first, second] = screen.getAllByRole('button')

    await userEvent.click(first)

    expect(first).toHaveAttribute('aria-pressed', 'true')
    expect(second).toHaveAttribute('aria-pressed', 'false')
  })
})
