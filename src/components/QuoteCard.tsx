import { cn } from '@/lib/utils'
import React, { useContext } from 'react'
import { Button } from './ui/button'
import { FaRegHeart } from "react-icons/fa6";
import toast from 'react-hot-toast';
import favouriteContext from '@/context/favouriteContext';

const QuoteCard = ({ quote }) => {
    // console.log(quote)
    const colors = ["#DC143C"]
    const { favouriteContainer, setFavouriteConatiner } = useContext(favouriteContext)
    const idx = Math.floor((Math.random() * colors.length))
    console.log(idx)
    const handleCopy = async (text) => {

        try {
            await navigator.clipboard.writeText(text)
            toast.success("Copied to clipboard")
        } catch (error) {
            toast.error("Failed to copy try again")
        }
    }
    const handleFavourite = (item) => {
        console.log(favouriteContainer)
        if (!favouriteContainer) {
            const container = []
            container.push(item)
            setFavouriteConatiner(container)
            console.log(favouriteContainer)
        }
        else {
            const isExits = favouriteContainer.find((quote) => quote._id === item._id)
            if (isExits) return
            const container = [...favouriteContainer]
            container.push(item)
            setFavouriteConatiner(container)
            console.log(favouriteContainer)
        }
        toast.success("Add to Favourite")
    }
    return (
        <div className={cn(`flex flex-col justify-evenly  w-64 h-80 bg-[#DC143C] font-semibold text-lg p-5 mt-5 rounded-md mx-5 `)}>
            {quote.quote}
            <div className=' font-semibold mt-2 '>
                {quote.author}
            </div>
            <div className='flex flex-row items-center justify-center gap-10'>

                <Button className='mt-2 ' onClick={(e) => handleCopy(quote.quote)}>Copy to clipboard</Button>
                <Button variant={'default'} onClick={(e) => handleFavourite(quote)}>

                    <FaRegHeart size={15} className='hover:text-[#DC143C] text-white ' />
                </Button>
            </div>
        </div>
    )
}

export default QuoteCard