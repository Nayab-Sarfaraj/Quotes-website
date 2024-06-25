import Loader from '@/components/Loader';
import QuotesTable from '@/components/QuotesTable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { fetchQuotes } from '@/redux/slices/QuotesSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Quotes = () => {
    const dispatch = useDispatch()
    const HeadData = ["ID", "Quote", "Category", "Author", "Edit and Delete"]

    const quotes = useSelector(state => state.quotes.data.quotes)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (quotes) setIsLoading(false)
    }, [quotes])
    useEffect(() => { dispatch(fetchQuotes()) }, [isLoading])
   
    return (
        isLoading ? <Loader /> : (<ScrollArea className='w-auto h-screen'>
            <QuotesTable tableBodyData={quotes} tableHeaderArr={HeadData} setIsLoading={setIsLoading} />
            

        </ScrollArea>)
    )
}

export default Quotes