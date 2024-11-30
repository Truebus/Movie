import './App.css';
import { NavBar } from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Trending } from './Components/Trending';
import { Popular } from './Components/Popular';
import { Upcoming } from './Components/Upcoming';
import { Rated } from './Components/Rated';
import { NotFound } from './Components/NotFound';
import { HandleToggler } from './Context/ContextTheme';
import { HandleCart } from './Context/CartContext';
import { DetailPage } from './Components/DetailPage';
import { Cart } from './Components/Cart';
import { AuthProvider } from './Context/AuthContext';
import Login from './Components/Login';  // Correct import
import Signup from './Components/Signup';  // Correct import
import { HandleCounter } from './Context/Counter';
import { Footer } from './Components/footer';
import { Faq } from './Components/Faq';

function App() {
  return (
    <div>
      <AuthProvider>
        <HandleCart>
          <HandleCounter>
          <HandleToggler>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<Trending />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/upcoming" element={<Upcoming />} />
                <Route path="/rated" element={<Rated />} />
                <Route path="/movie/:id" element={<DetailPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} /> {/* Added Login route */}
                <Route path="/signup" element={<Signup />} /> {/* Added Signup route */}
                <Route path='/faq' element={<Faq/>}/>
                <Route path="/*" element={<NotFound />} />
              </Routes>
              <Footer/>
            </BrowserRouter>
          </HandleToggler>
          </HandleCounter>
        </HandleCart>
      </AuthProvider>
    </div>
  );
}

export default App;
