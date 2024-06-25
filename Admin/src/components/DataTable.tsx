import { ScrollArea } from "@/components/ui/scroll-area"
import { fetchSearchItem } from "@/redux/slices/AuthorCategorySlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import QuotesTable from "./QuotesTable"
import SearchItemTable from "./SearchItemTable"

const DataTable = () => {
    const params = useParams()
    const author = params?.author
    const category = params?.category
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const quotes = useSelector(state => state.searchedItem?.data?.quotes)
    const categoryArr = useSelector(state => state.searchedItem?.data?.categoryArr)
    const authorArr = useSelector(state => state.searchedItem.data.authorArr)
   
    useEffect(() => {
        dispatch(fetchSearchItem({ author, category }))


    }, [author, category, isLoading])
    useEffect(() => {
        if (quotes) setIsLoading(false)
    }, [quotes])
    const HeadData = ["ID", "Quote", "Category", "Author", "Edit and Delete"]
    const CategoryTabelHead = ["Serial no", "Category"]
    const AuthorTabelHead = ["Serial no", "Author"]
    return (
        <ScrollArea className="h-full w-full ">
            {

                isLoading ? <Loader /> : (<div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-center text-xl font-semibold my-5">All {author ? author : category} Quotes</h1>
                    <QuotesTable tableHeaderArr={HeadData} tableBodyData={quotes} setIsLoading={setIsLoading} />


                </div>)
            }

            {
                author ? (<div>
                    <h1 className="text-center text-xl font-semibold my-5 capitalize">Categories {author} has worked on</h1>

                    <SearchItemTable tableBodyData={categoryArr} tableHeaderArr={CategoryTabelHead} />




                </div>) : (
                    <div>
                        <h1 className="text-center text-xl font-semibold my-5 capitalize">Authors that has contributed to {category}</h1>
                        <SearchItemTable tableBodyData={authorArr} tableHeaderArr={AuthorTabelHead} />

                    </div>
                )
            }

        </ScrollArea >
    )
}

export default DataTable