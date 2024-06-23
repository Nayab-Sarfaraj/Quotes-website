import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

  return (

    <div className="bg-[#121928] min-h-screen mx-auto">
      <Router>

        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/category" element={<Category />}></Route>
          <Route path="/quotes" element={<Quotes></Quotes>}></Route>

          <Route path="/quotes/:author" element={<Quotes></Quotes>}></Route>

          <Route path="/quotes/category/:category" element={<Quotes></Quotes>}></Route> */}
        </Routes>
      </Router >
    </div >

  )
}

export default App
