import QuoteCard from '@/components/QuoteCard'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Favourite = () => {
    const favourites = useSelector(state => state.favourites)
    const navigate = useNavigate()
    return (
        <>
            {
                favourites.length !== 0 ? <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pb-8 place-items-center'>
                    {
                        favourites?.map((quote, index) => <QuoteCard quote={quote} key={index} />)
                    }

                </div> : (
                    <div className='h-screen flex flex-col items-center justify-center'>
                        <h1 className='text-center text-white text-5xl mb-8'>Add your favourite quotes 😒</h1>
                        <Button variant={"secondary"} onClick={() => navigate("/")}>Home</Button>
                    </div>
                )
            }
        </>
    )
}

export default Favourite