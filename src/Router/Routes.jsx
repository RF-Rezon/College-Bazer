import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import LogInPage from "../Auth/LogInPage";
import RegisterPage from "../Auth/Register";
import AdmissionForm from "../Components/AdmissionForm";
import SingleCollegeDetails from "../Components/SingleCollegeDetails";
import SingleCollegeDetails2 from "../Components/SingleCollegeDetails2";
import UpdateUser from "../Components/UpdateUser";
import UserPage from "../Components/UserPage";
import AllCollegePage from "../Pages/AllCollegePage";
import ErrorPage from "../Pages/ErrorPage";
import WholePage from "../WholePage/WholePage";
import AdmissionPage from './../Pages/AdmissionPage';
import HomePage from './../Pages/HomePage';
import MyCollegePage from './../Pages/MyCollegePage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WholePage />,
    children: [
      {path: "/",
      element: <HomePage/>
    },
      {path: "/pages/allcollege",
      element: <AllCollegePage/>
    },
      {path: "/pages/admission",
      element: <AdmissionPage/>
    },
      {path: "/pages/my_college",
      element: <MyCollegePage/>,

    },
      {path: "/all/:id",
      element: <SingleCollegeDetails />,
      loader: ({ params }) => fetch(`https://college-bazar-server.vercel.app/all/${params.id}`),
    },
      {path: "/all2/:id",
      element: <SingleCollegeDetails2 />,
      loader: ({ params }) => fetch(`https://college-bazar-server.vercel.app/all/${params.id}`),
    },
      {path: "/admission/:id",
      element: <AdmissionForm />,
     
    },
      {path: "/login",
      element: <LogInPage />,
      
    },
      {path: "/register",
      element: <RegisterPage />,
      
    },
      {path: "/user/:email",
      element: <UserPage />,
      loader: ({params})=> fetch(`https://college-bazar-server.vercel.app/user/${params.email}`)
    },
    {path: "/updateUser/:email",
      element: <UpdateUser />
    }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);
