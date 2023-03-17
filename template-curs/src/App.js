import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './container/Main';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Pages from './components/Pages';
import NotFound from './components/NotFound';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/About",
        element: <AboutUs />,
      },
      {
        path: "/Pages",
        element: <Pages />,
        children:[
          {
            path: "404",
            element: <NotFound />,
          }
        //   {
        //     path: "/pricing",
        //     element: <Pricing />,
        //   },
        //   {
        //     path: "/faq",
        //     element: <FAQ />,
        //   },
        //   {
        //     path: "/testimonials",
        //     element: <Testimonials />,
        //   },
        //   {
        //     path: "/team",
        //     element: <Team />,
        //   }
         ]
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
