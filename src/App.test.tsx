import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { LikesProvider } from './context/LikesContext'

function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <LikesProvider>
          <App />
        </LikesProvider>
      </AuthProvider>
    </MemoryRouter>,
  )
}

describe('App routes', () => {
  it('shows the sign-in page when a signed-out reader opens /liked', () => {
    renderAt('/liked')
    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument()
  })

  it('opens the protected page after signing in', async () => {
    renderAt('/liked')
    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }))
    expect(screen.getByRole('heading', { name: 'Liked posts' })).toBeInTheDocument()
  })

  it('shows the 404 page inside the layout for an unknown URL', () => {
    renderAt('/banana')
    expect(screen.getByRole('heading', { name: /404/ })).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('shows a clear message for a post id that does not exist', () => {
    renderAt('/posts/999')
    expect(screen.getByRole('heading', { name: 'Post not found' })).toBeInTheDocument()
  })
})
