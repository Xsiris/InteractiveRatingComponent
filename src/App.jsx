import { useState } from 'react'
import RatingPage from './pages/RatingPage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer />
      <RatingPage />
    </>
  )
}

export default App
