import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // Default Inport
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "../src/components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile.js";
import Shimmer from "./components/Shimmer.js";
// import Instamart from "./components/Instamart.js";
// Named Import
// import {title} from "./components/Header"
{
  /**
 Header
    Logo
    NavItems(RIght Side)
    Cart
  Body 
    -Search Bar
    -restraunt List
    -restraunt Card
      -Image
      -Name
      -Rating
      -Cuisines
  Footer
  - Links
  -COpyRight
*/
  // 2 types Component
  // Functional - New  it is at last a function
  // Class Based Components
  // Giving Inline CSS in React to Component
  // const styleObj= {
  //   backgroundColor: "red",
  // };
  // const jsx = (
  //   <div style = {styleObj}>
  //     <h1>JSX</h1>
  //     <h2> Second JSX</h2>
  //   </div>
  //  -------------------------
  //<div style = {{
  //   backgroundColor: "red",
  // }}>
  //     <h1>JSX</h1>
  // )
  // COnfig Driven UI
  // const config= [
  //   {
  //   type: "corousel",
  //   cards: [{
  //     offerName : "50% off"
  //   },
  // {
  //   offerName : " No Delivery Charge"
  // }
  // ]
  // },
  // {
  //   type: "restraunt",
  //   cards: [{
  //     name: " Burger King",
  //     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
  //     cuisines: ["Burger"," American"],
  //     rating: "4.2"
  //   },
  // {
  //   name: " KFC",
  //   image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
  //   cuisines: ["Burger"," American"],
  //   rating: "4.2"
  // }
  // ]
  // }
  // ]
  // props - properties to component
}

//Chuncking,Code Splitting,Dynamic Import, Dynamic Bundling,LazyLoading, Ondemand Loading-- Same Concept/same Name
// When you are trying to OnDemand Loading, React Tries to suspend it
// Upon on Demand Loading -> upon render ->suspend Loading
const Instamart = lazy(() => import("./components/Instamart.js"));
const About = lazy(() => import("./components/About.js"));
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
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
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu />,
      },
      {
        path: "/Instamart",
        element: (
          // <Instamart />
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element  inside root

root.render(<RouterProvider router={appRouter} />);
// react.create elements gives object that is converted to htmland put on htmldom
// WHat is JSX
// React.createElement => Object => HTML(Dom)

// JSX uses => React.createElement => Object => HTML(DOm  )
// React and JS use Camel Caseing like -- rootReact
// Difference between HTML and JSX?
// Why dist folder comes, working ?
// Hot Module Reloding(HMR)
// File Watcher Algorithm -- Written in C++
// Parcel, Vite are Bundlers
// You should put parcel cache in the Git Ignore
// Consistent hashing algorithm, COmpression,Minify,Image Optimization, Caching
// Difference between Dev Dependency and normal Dependency
// Transitive Dependency -- 2/15
// zreo Configuration
// browserList package
// tree shaking - Removing unwanted code
// Consistent Hashing Algo
// What is COmponent Composition
// WHat is OneWay Data Binding
