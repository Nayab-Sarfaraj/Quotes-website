import Loader from '@/components/Loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
import { createQuote, editQuote } from '@/redux/slices/CreateQuoteSlice'
import { fetchSingleQuote } from '@/redux/slices/SingleQuoteSlice'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const CreateQuote = () => {
    const params = useParams()
    const id = params?.id
    const [quote, setQuote] = useState("")
    const [category, setCategory] = useState("")
    const [author, setAuthor] = useState("")
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const fetchedQuote = useSelector(state => state.singleQuote?.data?.quote)

    useEffect(() => {
        if (id)
            dispatch(fetchSingleQuote(id))

    }, [id])

    useEffect(() => {
        if (fetchedQuote) {
            setAuthor(fetchedQuote.author)
            setCategory(fetchedQuote.category)
            setQuote(fetchedQuote.quote)

        }
    }, [fetchedQuote, id])
    const handleSubmit = (e) => {
        try {
            setIsLoading(true)
            e.preventDefault()
            if (!quote || !category || !author) {

                toast.error("Please fill all the input")
                return
            }
            dispatch(createQuote({ quote, category, author }))
            setAuthor("")
            setCategory("")
            setQuote("")

            toast.success("Created 200 🤗")
            setIsLoading(false)
            naviagte("/admin/quotes/all")
        } catch (error) {
            console.log("error in the component : " + error)
            toast.error(error.message)
        }
    }
    const handleUpdate = async (e) => {
        try {
            setIsLoading(true)
            e.preventDefault()

            const response = await dispatch(editQuote({ id, quote, category, author }))
            setIsLoading(false)
            toast.success("Edited successfully")
            setAuthor("")
            setCategory("")
            setQuote("")
            naviagte("/admin/quotes/all")

        } catch (error) {
            console.log("error in the component update : " + error)
            toast.error(error.message)
        }
    }
    return (

        isLoading ? <Loader /> : <div className='flex h-screen items-center flex-col w-[80vw]  p-10 gap-5 justify-center'>
            <div className='bg-[azure] p-10 rounded-md'>

                <h1 className='text-xl mb-3 text-center font-semibold   '>{
                    id ? "Edit Quote" : "Create Quote"
                }</h1>
                <form className='flex flex-col items-center gap-10 ' onSubmit={(e) => handleSubmit(e)}>
                    <Textarea placeholder='Quote' value={quote} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQuote(e.target.value)} />
                    <Input type='text' placeholder='Author' value={author} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAuthor(e.target.value)} />
                    <Input type='text' placeholder='Category'
                        value={category} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCategory(e.target.value)}
                    />
                    <Button variant={'outline'} onClick={(e) => id ? handleUpdate(e) : handleSubmit(e)}>{id ? "Edit" : "Submit"}</Button>

                </form>
            </div>

        </div>

    )
}

export default CreateQuote