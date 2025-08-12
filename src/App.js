import { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import UserContext from './utils/UserContext'
import appStore from './utils/appStore'

// chunking
// code splitting
// dynamic bundling
// lazy loading
// on demand loading
const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => {
  const [userName, setUserName] = useState()
  useEffect(() => {
    setUserName('Ravan')
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div id="app" className="app">
          {/* <UserContext.Provider value={{ loggedInUser: 'TESTING' }}> */}
          <Header />
          {/* </UserContext.Provider> */}

          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense
            fallback={
              <>
                <h1>Loading</h1>
              </>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: 'restaurant/:id',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
