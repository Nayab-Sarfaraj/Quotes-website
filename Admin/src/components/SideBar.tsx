import React from 'react'
import { IoStatsChart } from "react-icons/io5";
const SideBar = () => {
    return (
        <aside className='min-h-screen max-h-max w-64 bg-white z-50 border-r-2 border-gray-500'>
            <div className='w-full flex items-center justify-center py-5'>
                <img alt="Logo" src={'../../public/logo.svg'} height={130} width={130} />
            </div>
            <nav className='flex h-full flex-col border-r bg-white shadow-sm'>
                <div className='p-4 pb-2 flex items-center justify-between bg-slate-300'>
                    <IoStatsChart />
                    Dashboard
                </div>
                <div className='p-4 pb-2 flex items-center justify-between bg-slate-300'>
                    <IoStatsChart />
                    Get All quotes
                </div>
                <div className='p-4 pb-2 flex items-center justify-between bg-slate-300'>
                    <IoStatsChart />
                    Create Quotes
                </div>

            </nav>


        </aside>
    )
}

export default SideBar