import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import AllCollegePage from "../Pages/AllCollegePage";
import WholePage from "../WholePage/WholePage";
import AdmissionPage from './../Pages/AdmissionPage';
import HomePage from './../Pages/HomePage';
import MyCollegePage from './../Pages/MyCollegePage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WholePage />,
    children: [
      {path: "/pages/home",
      element: <HomePage/>
    },
      {path: "/pages/allcollege",
      element: <AllCollegePage/>
    },
      {path: "/pages/admission",
      element: <AdmissionPage/>
    },
      {path: "/pages/users_college",
      element: <MyCollegePage/>
    },
    ]
  },
]);
