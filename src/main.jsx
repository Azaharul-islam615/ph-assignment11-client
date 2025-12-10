import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Homelayout from './layout/Homelayout.jsx'
import Home from './pages/Home.jsx'
import Errorpage from './component/Errorpage.jsx'
import AllContests from './pages/AllContest.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ContestDetails from './component/ContestDetails.jsx'

const router=createBrowserRouter([
    {path:'/',
      Component:Homelayout,
      children:[
        {index:true,
          Component:Home
        },
        
        {path:'/allcontest',
          element:<AllContests></AllContests>
        }, 
        {path:'/about',
          Component:About
        },
        {path:'/contact',
          Component:Contact
        },
        {path:'/contestdetails',
          Component:ContestDetails
        },
        {
          path: '*',
          Component: Errorpage
        }
      ]
    }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
