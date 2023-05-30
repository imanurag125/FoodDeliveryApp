import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./component/Error";
import About from "./component/About";
import Contact from "./component/Contact";
import Service from "./component/Service";
import ProfileClass from "./component/ProfileClass";
import RestrauntDetail from "./component/RestrauntDetail";
import CardShimmer from "./component/CardShimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./component/Cart";
const InstaMart = React.lazy(() => import("./component/InstaMart"));

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Body />
          </>
        ),
      },

      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/instamart",
        element: (
          <>
            <Suspense fallback={<CardShimmer />}>
              <InstaMart />
            </Suspense>
          </>
        ),
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

/*(
        
        ),*/
