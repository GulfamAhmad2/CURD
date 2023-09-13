import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Post from './pages/Post'
import Edit from './pages/Edit'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/post-data' element={ <Post/> } />
        <Route path='/update/:id' element={ <Edit/> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
