import Addtask from "./components/Taskinput";
import Navbar from "./components/Navbar";
import Tasklist from "./components/Tasklist";
import {Toaster} from 'react-hot-toast'
function App() {
  
  return (
    <>
  <Toaster/>
   <Navbar/>
   <div className="p-4 flex-col flex gap-4 justify-center items-center">
   <Addtask/>
   <Tasklist/>
   </div>
    </>
  );
}

export default App;
