import React from 'react'
import SidebarItem from './SidebarItem';
import SidebarRoutes from './SidebarRoutes';
const SideBar = () => {
    return (
        <aside className='min-h-screen max-h-max md:w-64 bg-white z-50 w-full border-gray-400 border-r-2'>
            <div className='w-full flex items-center justify-center py-5'>
                <img alt="Logo" src={'../../public/logo.svg'} height={130} width={130} />
            </div>
           <SidebarRoutes />


        </aside>
    )
}

export default SideBar