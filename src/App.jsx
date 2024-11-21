import './App.css'
import { NavBar } from './Components/NavBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Trending } from './Components/Trending'
import { Popular } from './Components/Popular'
import { Upcoming } from './Components/Upcoming'
import { Rated } from './Components/Rated'
import { NotFound } from './Components/NotFound'
import { HandleToggler } from './Context/ContextTheme'
import { HandleCounter } from './Context/Counter'
import { DetailPage } from './Components/DetailPage'
import { Cart } from './Components/Cart'
import { HandleCart } from './Context/CartContext'

function App() {

  return (
    <div>
      <HandleCart>
      <HandleCounter>
      <HandleToggler>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Trending/>}></Route>
        <Route path='/popular' element={<Popular/>}></Route>
        <Route path='/upcoming' element={<Upcoming/>}></Route>
        <Route path='/rated' element={<Rated/>}></Route>
        <Route path='/movie/:id' element={<DetailPage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
       
      </Routes>
      </BrowserRouter>
      </HandleToggler>
      </HandleCounter>
      </HandleCart>
    </div>
  )
}

export default App
