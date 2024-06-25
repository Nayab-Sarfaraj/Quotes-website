import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button } from '@/components/ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';
import Loader from '@/components/Loader';
import { fetchQuotes } from '@/redux/slices/QuotesSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';

const Quotes = () => {
    const naviagte = useNavigate()
    const dispatch = useDispatch()
    const quotes = useSelector(state => state.quotes.data.quotes)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (quotes) setIsLoading(false)
    }, [quotes])
    useEffect(() => { dispatch(fetchQuotes()) }, [isLoading])
    const handleDelete = async (e, id) => {
        try {
            setIsLoading(true)
            e.preventDefault()
            console.log(id)
            const response = await axios.delete(`/api/quotes/${id}`)
            setIsLoading(false)
            toast.success("deleted success fully")
        } catch (error) {
            console.log("error while deleting the product " + error)
        }
    }
    return (
        isLoading ? <Loader /> : (<ScrollArea className='w-auto h-screen'>
            <Table>
                <TableCaption>A list of all quotes.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Quote</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right">Author</TableHead>
                        <TableHead>Edit  and  Delete</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        quotes?.map((quote, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{quote._id}</TableCell>
                                    <TableCell>{quote.quote}</TableCell>
                                    <TableCell>{quote.category}</TableCell>
                                    <TableCell className="text-right">{quote.author}</TableCell>
                                    <TableCell className='flex items-center justify-center gap-1'>
                                        <Button variant={"ghost"} onClick={(e) => naviagte(`/admin/quotes/create/${quote._id}`)}>

                                            <FaEdit size={18} />
                                        </Button>
                                        <Button variant={'ghost'} onClick={(e) => { handleDelete(e, quote._id) }}>
                                            <MdDelete size={18} className='text-red-700' />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }


                </TableBody>
            </Table>

        </ScrollArea>)
    )
}

export default Quotes