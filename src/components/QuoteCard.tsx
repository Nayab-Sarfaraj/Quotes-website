import { cn } from '@/lib/utils';
import { addFav } from '@/redux/Slices/FavSlice';
import toast from 'react-hot-toast';
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { Button } from './ui/button';

const QuoteCard = ({ quote }) => {
    const dispatch = useDispatch()
    const handleCopy = async (text: string) => {

        try {
            await navigator.clipboard.writeText(text)
            toast.success("Copied to clipboard")
        } catch (error) {
            toast.error("Failed to copy try again")
        }
    }
    const handleFavourite = (item) => {
        dispatch(addFav(item))

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