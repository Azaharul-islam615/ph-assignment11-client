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

import ContestDetails from './component/ContestDetails.jsx'
import Login from './component/Login.jsx'

import Register from './component/Register.jsx'
import Authprovider from './Context/Authprovider.jsx'

import Contact from './pages/Contact.jsx'
import Privetroutes from './component/Privetroutes.jsx'
import DashboardLayout from './layout/DashboardLayout.jsx'
import Mycontests from './pages/Dashboard/mycontests/Mycontests.jsx'
import MyCreatedContests from './pages/Dashboard/MyCreatedContests/MyCreatedContests.jsx'
import SubmittedTasks from './pages/Dashboard/Submitted Tasks/SubmittedTasks.jsx'
import EditContest from './pages/Dashboard/Edit contest/Editcontest.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    Component: Homelayout,
    children: [
      {
        index: true,
        Component: Home
      },

      {
        path: '/allcontest',
        element: <AllContests></AllContests>
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/contact',
        element:<Privetroutes><Contact></Contact></Privetroutes>
       
      },
      {
        path: '/contestdetails',
        Component: ContestDetails
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '*',
        Component: Errorpage
      }
    ]
  },
  {path:'/dashboard',
    element:<Privetroutes><DashboardLayout></DashboardLayout></Privetroutes>,
    children:[
      {
        path:'createContest',
        Component:Mycontests

      },
      {path:'mycreatedcontest',
        Component:MyCreatedContests
      },
      {path:'submittedTask',
        Component:SubmittedTasks
      },
      {path:'editcontest/:id',
        Component:EditContest
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Authprovider>
      <StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </StrictMode>,
    </Authprovider>
  </QueryClientProvider>


)
