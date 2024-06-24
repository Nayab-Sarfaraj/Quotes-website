import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';

function App() {

  return (

    <div className="bg-white min-h-screen mx-auto flex flex-row">
      <Router>
        <SideBar />

        <Routes>

          <Route path='/' element={<Home />}></Route>
        </Routes>

      </Router >
    </div >

  )
}

export default App
