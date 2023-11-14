import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Search from './pages/Search/Search';
import CreateRecipe from './pages/CreateRecipe/CreateRecipe';
<<<<<<< HEAD
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/AbountUs/AbountUs';
=======
import Login from './pages/Login/Login';
import Recipe from './pages/Recipe/Recipe';
import Profile from './pages/Profile/Profile';
>>>>>>> 2db2d30c1cb951f8e4ec19b3ef3d3ed64f0898b5

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />

      <Routes>
        
        {/* <Route index element={<Home />} /> */}
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/search' element={<Search />} />
        <Route path='/create-recipe' element={<CreateRecipe />} />
<<<<<<< HEAD
        {<Route path='/aboutUs' element={<AboutUs />} /> }
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/profile' element={<Profile />} /> */}
        {<Route path="/NotFound" element={<NotFound />} /> }
=======
        {/* <Route path='/about' element={<AboutUs />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
>>>>>>> 2db2d30c1cb951f8e4ec19b3ef3d3ed64f0898b5
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
