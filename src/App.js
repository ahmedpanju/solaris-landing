import Home from "./pages/Home";
import AttendeesProvider from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <AttendeesProvider>
        <Home />
      </AttendeesProvider>
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
