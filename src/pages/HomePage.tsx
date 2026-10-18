import { Link } from 'react-router'
import { latestFirst } from '../data/posts'
import PostList from '../components/PostList'

function HomePage() {
  return (
    <>
      <h1>Hi, I'm Adilbek</h1>
      <p className="lead">
        This blog is my notebook for the IWaMAD web course. Each post is about something
        I learned in one of the weeks, from semantic HTML to design tokens.
      </p>

      <h2 className="section-heading">Latest posts</h2>
      <PostList items={latestFirst.slice(0, 2)} />
      <p>
        <Link to="/posts">See all posts</Link>
      </p>
    </>
  )
}

export default HomePage
