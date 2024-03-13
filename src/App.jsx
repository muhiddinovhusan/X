import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './components/User'
import AddUser from './components/AddUser'
import Read from './components/Read'

const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<User/>}/>
      <Route path="/addUser" element={<AddUser/>}/>
      <Route path="/read/:id" element={<Read/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App