import '../src/index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from '../src/components/layout/Navbar'
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import NotFound from './pages/NotFound';
import {GithubProvider} from './context/github/GithubContext';
import {AlertProvider} from './context/alert/AlertContext';

function App() {
  return(
    // github provider wraps all coz for you to use a contect to have to warp all
    <GithubProvider>
      <AlertProvider>
      {/* router is responsible for the routes */}
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar/>
            <main className='mx-auto px-3 pb-12'>
              <Alert/>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/users/:login' element={<User/>}></Route>
                <Route path='/notfound' element={<NotFound/>}></Route>
                <Route path='/*' element={<NotFound/>}></Route>
              </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
