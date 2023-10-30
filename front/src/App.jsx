import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import CreateRecipe from './pages/CreateRecipe/CreateRecipe';

function App() {

  return (
    <>
      <NavBar />
      {/* <CreateRecipe /> */}
      <Footer />
      {/* <Routes>
        <Route index element={<Home />} />
        <Route exact path='/' />
        <Route path='/about' />
        <Route path='/about' />
        <Route path="*" element={<NoMatch />} />
      </Routes>*/}
    </>
  )
}

export default App
