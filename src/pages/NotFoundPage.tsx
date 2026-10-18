import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <>
      <h1>404 - Page not found</h1>
      <p>This address does not exist on the blog.</p>
      <Link to="/">Back to the home page</Link>
    </>
  )
}

export default NotFoundPage
