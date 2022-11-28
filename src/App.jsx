
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ProductId from './pages/ProductId'
import Purchases from './pages/Purchases'
import Login from './pages/Login'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { Container } from 'react-bootstrap'


function App() {
  
  const isLoading = useSelector(state => state.isLoading);

  return (

      <HashRouter>
      <NavBar/>
      {isLoading && <LoadingScreen/>}
      <Container className='my-3'>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/purchases" element={ <Purchases/> } />
          <Route path="/products" element={ <ProductId/> } />

          <Route path="/products/:id" element={ <ProductId/> } />
          <Route path="/login" element={ <Login/> } />
        </Routes>
      </Container>
      </HashRouter>
     
   
  )
}

export default App
