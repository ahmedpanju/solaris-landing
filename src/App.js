import Home from "./pages/Home";
import HttpsRedirect from "react-https-redirect";
import AttendeesProvider from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
