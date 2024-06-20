import QuoteCard from '@/components/QuoteCard'
import favouriteContext from '@/context/favouriteContext'
import React, { useContext } from 'react'

const Favourite = () => {
    const { favouriteContainer, setFavouriteConatiner } = useContext(favouriteContext)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pb-8 place-items-center'>
            {
                favouriteContainer?.map((quote, index) => <QuoteCard quote={quote} key={index} />)
            }

        </div>
    )
}

export default Favourite