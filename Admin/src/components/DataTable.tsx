import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { fetchSearchItem } from "@/redux/slices/AuthorCategorySlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "./ui/button"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import toast from "react-hot-toast"
import axios from "axios"
import Loader from "./Loader"

const DataTable = () => {
    const params = useParams()
    const author = params?.author
    const category = params?.category
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const quotes = useSelector(state => state.searchedItem?.data?.quotes)
    const categoryArr = useSelector(state => state.searchedItem?.data?.categoryArr)
    const authorArr = useSelector(state => state.searchedItem.data.authorArr)
    const handleDelete = async (e, id) => {
        try {
            setIsLoading(true)
            e.preventDefault()
            console.log(id)
            const response = await axios.delete(`/api/quotes/${id}`)
            setIsLoading(false)
            console.log(response.data)
            toast.success("deleted success fully")

        } catch (error) {
            console.log("error while deleting the product " + error)
        }
    }
    useEffect(() => {
        dispatch(fetchSearchItem({ author, category }))


    }, [author, category, isLoading])
    useEffect(() => {
        if (quotes) setIsLoading(false)
    }, [quotes])
    const HeadData = ["ID", "Quote", "Category", "Author", "Edit and Delete"]
    const CategoryTabelHead = ["Serial no", "Category"]
    const navigate = useNavigate()

    return (
        <ScrollArea className="h-full w-full ">
            {

                isLoading ? <Loader /> : (<div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-center text-xl font-semibold my-5">All {author ? author : category} Quotes</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {
                                    HeadData.map((head, index) => {
                                        return (

                                            <TableHead className="" key={index}>{head}</TableHead>

                                        )
                                    })
                                }
                            </TableRow>


                        </TableHeader>
                        <TableBody>


                            {
                                quotes?.map((quote, index) => {
                                    return (<TableRow key={index}>
                                        <TableCell className="font-medium">{quote._id}</TableCell>
                                        <TableCell>{quote.quote}</TableCell>
                                        <TableCell>{quote.category}</TableCell>
                                        <TableCell className="text-right">{quote.author}</TableCell>
                                        <TableCell className='flex items-center justify-center gap-1'>
                                            <Button variant={"ghost"} onClick={(e) => navigate(`/admin/quotes/create/${quote._id}`)}>

                                                <FaEdit size={18} />
                                            </Button>
                                            <Button variant={'ghost'} onClick={(e) => { handleDelete(e, quote._id) }}>
                                                <MdDelete size={18} className='text-red-700' />
                                            </Button>
                                        </TableCell>
                                    </TableRow>)
                                })
                            }

                        </TableBody>
                    </Table>

                </div>)
            }

            {
                author ? (<div>
                    <h1 className="text-center text-xl font-semibold my-5 capitalize">Categories {author} has worked on</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="">Serail no</TableHead>
                                <TableHead>Category</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>

                            {
                                categoryArr?.map((category, index) => {
                                    return (
                                        <TableRow onClick={() => navigate(`/admin/category/${category}`)}>
                                            <TableCell className="font-medium">{index + 1}</TableCell>
                                            <TableCell>{category}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }


                        </TableBody>
                    </Table>




                </div>) : (


                    <div>
                        <h1 className="text-center text-xl font-semibold my-5 capitalize">Authors that has contributed to {category}</h1>
                        <Table>
                            <TableCaption>A list of your recent invoices.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Serail no</TableHead>
                                    <TableHead>Author</TableHead>

                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                {
                                    authorArr?.map((author, index) => {
                                        return (
                                            <TableRow onClick={() => navigate(`/admin/author/${author}`)}>
                                                <TableCell className="font-medium">{index + 1}</TableCell>
                                                <TableCell>{author}</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }


                            </TableBody>
                        </Table>
                    </div>
                )
            }

        </ScrollArea >
    )
}

export default DataTable