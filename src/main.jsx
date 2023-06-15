import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Authprovider from './provider/Authprovider.jsx';
import SignUp from './pages/SignUp.jsx';
import Classes from './pages/Classes.jsx';
import UserPrivateRoute from './provider/UserPrivateRoute.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import ManageUser from './pages/ManageUser.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import Instructorpage from './pages/Instructorpage.jsx';
import ErrorPage from './sherad/ErrorPage.jsx';
import AddItems from './pages/AddItems.jsx';
import Myallelectedclass from './pages/Myallelectedclass.jsx';
import InstructorProvider from './provider/InstructorProvider.jsx';
import AdminProvider from './provider/AdminProvider.jsx';
import Payment from './pages/Payment.jsx';
import 'react-toastify/dist/ReactToastify.css';
import MyenrollClass from './pages/MyenrollClass.jsx';
import Paymenthistory from './pages/Paymenthistory.jsx';
import Instructormyclass from './pages/Instructormyclass.jsx';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
         path: "class",
         element: <Classes></Classes>
      },
      {
         path: "instructor",
         element:<Instructorpage></Instructorpage>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: "dashboard",
    element: <UserPrivateRoute><Dashboard></Dashboard></UserPrivateRoute>,
    
    children:[
      {
        path: "manageuser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "additem",
        element:<AddItems></AddItems>
      },
      {
        path: "myallclasses",
        element: <Myallelectedclass></Myallelectedclass>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "enrollclass",
        element: <MyenrollClass></MyenrollClass>
      },
      {
        path: "instructorclassess",
        element: <Instructormyclass></Instructormyclass>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <QueryClientProvider client={queryClient}>
    <div className='m-container'>
    <RouterProvider router={router} />
    </div>
    <ToastContainer />
    </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>,
  
)
