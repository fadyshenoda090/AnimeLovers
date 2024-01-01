import './App.css'
import { Children, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './contexts/language'
import AppLayout from './appLayout/AppLayout'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Contact from './pages/contact/Contact'
import Favorites from './pages/favorites/Favorites'
import NotFound from './pages/notFound/NotFound'
import Home from './pages/home/Home'
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> ,errorElement:<NotFound/>},
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      // { path: '/details/:id', element: <Details /> },
      // { path: '/search', element: <SearchResults /> },
      { path: '*', element: <NotFound /> },
      { path: '/favorites', element: <Favorites />}
    ],
  },
]);

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <>
      <LanguageProvider value={{ language, setLanguage }}>
      <RouterProvider router={router} />
      </LanguageProvider>
    </>
  )
}

export default App