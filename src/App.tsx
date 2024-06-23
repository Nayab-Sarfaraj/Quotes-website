import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Category from "./screen/Category";
import Favourite from "./screen/Favourite";
import Home from "./screen/Home";
import Quotes from "./screen/Quotes";
import Search from "./screen/Search";
function App() {
  // const [favouriteContainer, setFavouriteConatiner] = useState([])
  // const getFav = async () => {
  //   try {
  //     const container = await localStorage.getItem("fav")
  //     setFavouriteConatiner(JSON.parse(container))
  //   } catch (error) {
  //     console.log("error while fetching the item ", error)
  //   }
  // }
  // useEffect(() => {
  //   getFav()
  // }, [])
  // const setFav = async () => {
  //   try {

  //     await localStorage.setItem("fav", JSON.stringify(favouriteContainer))
  //   } catch (error) {
  //     console.log("error while setting the item " + error);

  //   }
  // }
  // useEffect(() => {
  //   setFav()
  // }, [favouriteContainer])
  return (
    <div className="bg-[#121928] min-h-screen mx-auto">

      <Router>
        <Navbar />
        {/* <favouriteContext.Provider value={{ favouriteContainer, setFavouriteConatiner }}> */}



          <Routes>
            {/* <Toaster /> */}
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/category" element={<Category />}></Route>
            <Route path="/quotes" element={<Quotes></Quotes>}></Route>

            <Route path="/quotes/:author" element={<Quotes></Quotes>}></Route>

            <Route path="/quotes/category/:category" element={<Quotes></Quotes>}></Route>
          </Routes>
        {/* </favouriteContext.Provider> */}
      </Router>
    </div>
  )
}

export default App
