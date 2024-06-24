import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MobileSideBar from './components/MobileSideBar';
import SideBar from './components/SideBar';
import { fetchQuotes } from './redux/slices/QuotesSlice';
import CreateQuote from './views/CreateQuote';
import Home from './views/Home';
import Quotes from './views/Quotes';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuotes())
  }, [])
  return (

    <div className="bg-white min-h-screen mx-auto flex flex-row">
      <Router>
        <div className='inset-y-0 lg:flex md:flex hidden fixed '>

          <SideBar />
        </div>
        <div className='fixed inset-y-0'>

          <MobileSideBar />
        </div>
        <div className='md:ml-64 ml-20'>

          <Routes>

            <Route path='/' element={<Home />}></Route>
            <Route path='/admin/quotes/all' element={<Quotes />}></Route>
            <Route path='/admin/quotes/create' element={<CreateQuote />}></Route>

          </Routes>
        </div>

      </Router >
    </div >

  )
}

export default App
