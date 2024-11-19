import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './scenes/Home/Home'

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
