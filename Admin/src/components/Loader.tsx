import React from 'react'
import { LoaderIcon } from 'react-hot-toast'

const Loader = () => {
    return (
        <div className='h-screen flex items-center justify-center w-[80vw]'>
            <LoaderIcon className='size-14 border-8 border-slate-400' />
        </div>
    )
}

export default Loader