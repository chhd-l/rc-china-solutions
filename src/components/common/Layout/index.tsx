import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import Footer from '../Footer'
import { PageWrapper } from '../PageWrapper'
import useScrollToTop from '../../../hooks/useScrollToTop'

const Layout: React.FC = () => {
  useScrollToTop('page-content')

  return (
    <div className="flex flex-col h-full">
      <Header />
      <PageWrapper id="page-content">
        <Outlet />
        <Footer />
      </PageWrapper>
    </div>
  )
}

export default Layout
