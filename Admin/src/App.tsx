import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DataTable from './components/DataTable';
import MobileSideBar from './components/MobileSideBar';
import PrivateSecreen from './components/PrivateSecreen';
import SideBar from './components/SideBar';
import { fetchQuotes } from './redux/slices/QuotesSlice';
import CreateQuote from './views/CreateQuote';
import Home from './views/Home';
import Profile from './views/Profile';
import Quotes from './views/Quotes';
import { FetchProfile } from './redux/slices/LoginSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuotes())
    dispatch(FetchProfile())

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
            <Route path='/admin' element={<PrivateSecreen />}>
              <Route path='dashboard' element={<Home />} />
              <Route path='quotes/all' element={<Quotes />} />
              <Route path='quotes/create' element={<CreateQuote />} />
              <Route path='quotes/create/:id' element={<CreateQuote />} />
              <Route path='author/:author' element={<DataTable />} />
              <Route path='category/:category' element={<DataTable />} />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Routes>
        </div>

      </Router >
    </div >

  )
}

export default App
