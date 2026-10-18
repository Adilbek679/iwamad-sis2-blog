import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Header />
      <main>
        <div className="page">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
