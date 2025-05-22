import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from './component/About.js';
import Error from "./component/Error.js";
import Contact from "./component/Contact.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import userContext from "./utility/userContext.js";
import Cart from "./component/Cart.js";
import { Provider } from "react-redux";
import store from "./utility/store.js";

const About = lazy(() => {
  return import("./component/About.js");
});

/* Low level planning
 * -HEADER
 *    -logo
 *    -nav
 *      - home
 *      - about
 *      - wishlist
 *      - cart
 *
 * -BODY
 *    -search
 *    -restaurantComponent
 *         -restaurantCard
 *               -image
 *               -cuisine
 *               -restaurantName
 *               -rating
 *               -price
 *               -deliveryTime
 *
 * -Footer
 *    -copyright
 *    -address
 *    -contact us
 *
 *
 *
 */

const App = () => {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    //fetching
    let data = "Gauri";
    setUserName(data);
  }, []);

  return (
    <Provider store={store}>
      <userContext.Provider value={{ userName, setUserName }}>
        <div id="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
