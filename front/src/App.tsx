import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Search from './pages/Search/Search';
import CreateRecipe from './pages/CreateRecipe/CreateRecipe';
import Login from './pages/Login/Login';
import Recipe from './pages/Recipe/Recipe';
import Profile from './pages/Profile/Profile';

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/search' element={<Search />} />
        <Route path='/create-recipe' element={<CreateRecipe />} />
        {/* <Route path='/about' element={<AboutUs />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
