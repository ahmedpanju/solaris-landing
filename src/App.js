import Home from "./pages/Home";
import HttpsRedirect from "react-https-redirect";
import AttendeesProvider from "./context";
import { ToastContainer } from "react-toastify";
import ReactGa from "react-ga4";
import "react-toastify/dist/ReactToastify.css";

ReactGa.initialize("G-JEN46D7JZH");

function App() {
  return (
    <div>
      <HttpsRedirect>
        <AttendeesProvider>
          <Home />
        </AttendeesProvider>
        <ToastContainer position="bottom-center" />
      </HttpsRedirect>
    </div>
  );
}

export default App;
