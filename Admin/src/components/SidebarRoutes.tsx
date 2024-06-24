import React from 'react'

import { IoStatsChart } from "react-icons/io5";
import { FaSitemap } from "react-icons/fa6";
import SidebarItem from './SidebarItem';
import { MdDashboard } from "react-icons/md";

const SidebarRoutes = () => {
    const adminRoutes = [
        {
            title: "Dashboard",
            icon: MdDashboard,
            href: "/"
        }
        , {
            title: "Quotes",
            icon: IoStatsChart,
            href: "/admin/quotes/all"
        }, {
            title: "Create",
            icon: FaSitemap,
            href: "/admin/quotes/create"
        }
    ]
    return (
        <nav className='flex h-full flex-col border-r bg-white shadow-sm'>
            {
                adminRoutes.map((route, index) => <SidebarItem title={route.title} icon={route.icon} href={route.href} key={index} />)
            }
        </nav>
    )
}

export default SidebarRoutes