import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { createQuote } from '@/redux/slices/CreateQuoteSlice'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const CreateQuote = () => {
    const [quote, setQuote] = useState("")
    const [category, setCategory] = useState("")
    const [author, setAuthor] = useState("")
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(quote, category, author)
        dispatch(createQuote({ quote, category, author }))
        setAuthor("")
        setCategory("")
        setQuote("")
        toast.success("Created 200 🤗")
        naviagte("/admin/quotes/all")
    }
    return (
        <div className='flex h-screen items-center flex-col w-[80vw]  p-10 gap-5 justify-center'>
            <div className='bg-[azure] p-10 rounded-md'>

                <h1 className='text-xl mb-3 text-center font-semibold   '>Create Quote</h1>
                <form className='flex flex-col items-center gap-10 ' onSubmit={(e) => handleSubmit(e)}>
                    <Textarea placeholder='Quote' value={quote} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQuote(e.target.value)} />
                    <Input type='text' placeholder='Author' value={author} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAuthor(e.target.value)} />
                    <Input type='text' placeholder='Category'
                        value={category} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCategory(e.target.value)}
                    />
                    <Button variant={'outline'} onClick={(e) => handleSubmit(e)}>Submit</Button>

                </form>
            </div>

        </div>
    )
}

export default CreateQuote