import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Search from './pages/Search/Search.tsx';
import CreateRecipe from './pages/CreateRecipe/CreateRecipe';
import Login from './pages/Login/Login';
import Recipe from './pages/Recipe/Recipe';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';
import AboutUs from "./pages/AboutUs/AboutUs"
import { AuthContextProvider } from './context/authContext.tsx';
import ProtectedRoute from './routes/ProtectedRoute.tsx';


function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />

        <Routes>
          
          {/* <Route index element={<Home />} /> */}
          <Route path='/recipe/:id' element={<Recipe />} />
          <Route path='/search' element={<Search />} />
          <Route path='/create-recipe' 
          element={
            <ProtectedRoute>
              <CreateRecipe />
            </ProtectedRoute>
          } />
          {<Route path='/about-us' element={<AboutUs />} /> }
          <Route path='/login' element={<Login />} />
          <Route path='/profile/:username' element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
