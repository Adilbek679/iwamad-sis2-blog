import { Link, useLocation, useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'
import Button from '../components/ui/Button'

type FromState = { from?: string } | null

function SignInPage() {
  const { signedIn, signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as FromState)?.from ?? '/liked'

  function handleSignIn() {
    signIn()
    navigate(from, { replace: true })
  }

  if (signedIn) {
    return (
      <>
        <h1>You are signed in</h1>
        <p><Link to="/liked">Go to your liked posts</Link></p>
      </>
    )
  }

  return (
    <>
      <h1>Sign in</h1>
      <p>The liked posts page is only for signed-in readers. There is no password, this is a demo.</p>
      <Button onClick={handleSignIn}>Sign in</Button>
    </>
  )
}

export default SignInPage
