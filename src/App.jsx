import { RouterProvider, createBrowserRouter } from "react-router-dom";

// * pages
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages";

// * components
import { ErrorElement } from "./components";

// * loaders
import { landingLoader } from "./utils/loaders";

// * actions

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [{
      index: true,
      element: <Landing />,
      errorElement: <ErrorElement />,
      loader: landingLoader,
    },
    {
      path: 'products',
      element: <Products />,
    },
    {
      path: 'products/:id',
      element: <SingleProduct />,
    },


    // 
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'cart',
      element: <Cart />,
    },
    {
      path: 'checkout',
      element: <Checkout />,
    },
    {
      path: 'orders',
      element: <Orders />,
    },

    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
};

export default App