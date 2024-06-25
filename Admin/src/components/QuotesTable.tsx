import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { deleteQuote } from "@/redux/slices/CreateQuoteSlice"
import toast from 'react-hot-toast'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

const QuotesTable = ({ tableHeaderArr, tableBodyData, setIsLoading }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleDelete = async (e, id) => {
        try {

            e.preventDefault()
            setIsLoading(true)
            await dispatch(deleteQuote(id))
            setIsLoading(false)
            toast.success("deleted success fully")
        } catch (error) {
            console.log("error while deleting the product " + error)
        }
    }
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        {
                            tableHeaderArr.map((head, index) => {
                                return (

                                    <TableHead className="" key={index}>{head}</TableHead>

                                )
                            })
                        }
                    </TableRow>


                </TableHeader>
                <TableBody>


                    {
                        tableBodyData?.map((quote, index) => {
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
        </div>
    )
}

export default QuotesTable
