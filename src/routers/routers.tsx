import Portfolio from '@/portfolio/Portfolio'
import AboutMe from '@/portfolio/secssions/AboutMe'
import Contact from '@/portfolio/secssions/Contact'
import Intro from '@/portfolio/secssions/Intro'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'

export const routers = createBrowserRouter([
  {
    path: '/',
    element: (
      <Portfolio>
        <Outlet />
      </Portfolio>
    ),
    children: [
      {
        path: '/',
        element: <Intro />
      },
      {
        path: '/skills&exprience',
        element: <AboutMe />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  },

  {
    path: '*',
    element: <Navigate to='/' />
  }
])
