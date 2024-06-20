
import Paginations from '@/components/Paginations'
import QuoteCard from '@/components/QuoteCard'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useFetcher, useLocation, useParams } from 'react-router-dom'

const Quotes = () => {
    const params = useParams()
    const [quotes, setQuotes] = useState([])
    const [page, setPage] = useState(1)

    let author = params.author
    let category = params.category
    console.log(params)
    const getQuotes = async () => {
        try {

            if (author) {

                const response = await axios.get(`/api/quotes?page=${page}&author=${author}`)
                setQuotes(response.data)
                console.log(response.data);

            } else if (category) {
                console.log("insode ther csda")
                const response = await axios.get(`/api/quotes?page=${page}&category=${category}`)
                setQuotes(response.data)
                console.log(response.data);
            } else {

                const response = await axios.get(`/api/quotes?page=${page}`)

                console.log(response.data);

                setQuotes(response.data)
            }
        } catch (error) {
            console.log("Error while fetching the quotes " + error)
        }
    }

    useEffect(() => {
        getQuotes()
    }, [author])
    useEffect(() => {

        getQuotes()
    }, [page, setPage])
    useEffect(() => { getQuotes() }, [category])


    const location = useLocation()
    const pathname = location.pathname
    const HandleSoBack = () => {
        setPage(1)
        author = ""
        getQuotes()
    }
    return (
        <div>

            {
                quotes.length === 0 ? <div className='h-screen flex flex-col items-center justify-center'>
                    <h1 className='text-center text-white text-5xl'>Something went wrong 😒</h1>
                    <Button variant={'secondary'} className='text-md mt-6' onClick={HandleSoBack}>Go Back</Button>
                </div> : <>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pb-8 place-items-center'>      {
                        quotes?.map((quote, index) => <QuoteCard quote={quote} key={index} />)
                    }
                    </div>
                    {
                        pathname === "/" ? null : <div className='pb-5'> <Paginations page={page} setPage={setPage} /></div>
                    }
                </>
            }
        </div>
    )
}

export default Quotes