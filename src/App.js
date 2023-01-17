import Home from "./pages/Home";
import HttpsRedirect from "react-https-redirect";
import AttendeesProvider from "./context";
import { ToastContainer } from "react-toastify";
import ReactGa from "react-ga4";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Analytics from "./pages/Analytics";

ReactGa.initialize("G-JEN46D7JZH");

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/analytics",
      element: <Analytics />,
    },
  ]);

  return (
    <div>
      <HttpsRedirect>
        <AttendeesProvider>
          <RouterProvider router={router} />
        </AttendeesProvider>
        <ToastContainer position="bottom-center" />
      </HttpsRedirect>
    </div>
  );
}

export default App;
