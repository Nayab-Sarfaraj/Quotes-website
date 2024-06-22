
import Paginations from '@/components/Paginations'
import QuoteCard from '@/components/QuoteCard'
import { Button } from '@/components/ui/button'
import { fetchQuotes } from '@/redux/Slices/QuotesSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

const Quotes = () => {
    const params = useParams()
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    let author = params.author
    let category = params.category



    useEffect(() => {
        dispatch(fetchQuotes({ page, author, category }))

    }, [page, setPage, author, category])


    const data = useSelector(state => state.quotes.data)
    const location = useLocation()
    const pathname = location.pathname
    const HandleSoBack = () => {
        setPage(1)
    }
    return (
        <div>

            {
                data.length === 0 ? <div className='h-screen flex flex-col items-center justify-center'>
                    <h1 className='text-center text-white text-5xl'>Something went wrong 😒</h1>
                    <Button variant={'secondary'} className='text-md mt-6' onClick={HandleSoBack}>Go Back</Button>
                </div> : <>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pb-8 place-items-center'>      {
                        data?.map((quote, index) => <QuoteCard quote={quote} key={index} />)
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