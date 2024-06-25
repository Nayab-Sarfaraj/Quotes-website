import React from 'react'
import { LoaderIcon } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import AuthorTable from './AuthorTable'
import CategoryTable from './CategoryTable'

const Home = () => {
  const { quotes } = useSelector(state => state?.quotes?.data)
  const { authorArr } = useSelector(state => state?.quotes?.data)
  const { categoryArr } = useSelector(state => state?.quotes?.data)
  console.log(quotes)
  return (
    <div className='text-black ml-5 w-[80vw] h-screen'>
      <h1 className='text-center text-2xl my-5 font-bold'>Dashboard</h1>
      <div className='flex flex-row items-center justify-evenly w-full '>
        <div className='bg-sky-300 w-32 flex items-center flex-col justify-center h-32 rounded-full  '>
          <h3 className='text-lg font-semibold'>Quotes</h3>
          <p className='text-lg font-semibold'>{quotes?.length}</p>
        </div>
        <div className='bg-amber-300 w-32 flex items-center flex-col justify-center h-32 rounded-full '>
          <h3 className='text-lg font-semibold'>Author</h3>
          <p className='text-lg font-semibold'>{authorArr?.length}</p>
        </div>
        <div className='bg-teal-300 w-32 flex items-center flex-col justify-center h-32 rounded-full '>
          <h3 className='text-lg font-semibold'>Categories</h3>
          <p className='text-lg font-semibold'>{categoryArr?.length}</p>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center gap-14  mt-5 h-full w-full'>

        <AuthorTable />
        <div className='self-start w-[40%]'>

          <CategoryTable />
        </div>
      </div>


    </div>
  )
}

export default Home