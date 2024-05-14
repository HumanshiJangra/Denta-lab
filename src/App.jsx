import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import PdfPage from './Pages/PdfPage';
import { ToastProvider } from 'tw-noti';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pdf",
    element: <PdfPage />,
  },

]);

function App() {

  return (
    <>
   <ToastProvider>
      <RouterProvider router={router}></RouterProvider>
    </ToastProvider>
    </>
  )
}

export default App
