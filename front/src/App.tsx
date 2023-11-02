import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Search } from './pages/Search/Search';
import CreateRecipe from './pages/CreateRecipe/CreateRecipe';

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path='/recipe/:recipeId' element={<Recipe/>} /> */}
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<CreateRecipe />} />
        {/* <Route path='/about' element={<AboutUs />} /> */}
        {/* <Route path='/create-recipe' element={<CreateRecipe />} /> */}
        {/* <Route path='/profile' element={<Profile />} /> */}
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
