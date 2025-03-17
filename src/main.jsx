import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/mainStore.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HOME from "./components/Home/home.jsx";
import Bag from "./components/bag/bag.jsx";
import WishList from "./components/wishlist/wishlist.jsx";
import OrderForm from "./components/bag/Form.jsx";
import Orders from "./components/bag/orders.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HOME /> },
      { path: "/bag", element: <Bag /> },
      { path: "/wishlist", element: <WishList /> },
      { path: "/orderform", element: <OrderForm /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={myntraStore}>
    <RouterProvider router={route} />
  </Provider>
);
